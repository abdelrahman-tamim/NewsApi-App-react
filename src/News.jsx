import { useState, useEffect, memo } from "react";
import NewsCard from "./NewsCard";
import "./News.css";
import NewsAside from "./NewsAside";
import Nav from "./Nav";
const News = () => {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=b4d0766e50fd411b92be88c7594bffcb"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setNewsArray(data.articles);
      } catch (err) {
        console.error(err);
      }
    }

    getNews();
  }, []);
 

  const MoreNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4d0766e50fd411b92be88c7594bffcb"
    );
    const data = await response.json();
    setNewsArray([...newsArray, ...data.articles]);
  };

  return (
    <>
    <div className="navandmain">
    <Nav/>
      <div className="main-story">
        {newsArray.length > 0 ? (
          <>
            <NewsCard
              newsstory={
                newsArray[15]
              }
             
            />
             
            <div className="main-story-aside">
              <NewsCard
                newsstory={
                  newsArray[Math.floor(Math.random() * newsArray.length)]
                }
              />
              <NewsCard
                newsstory={
                  newsArray[Math.floor(Math.random() * newsArray.length)]
                }
              />
            </div>
            
          </>
        ) : (
          <div>loading</div>
        )}
      </div>
      </div>
      <div className="latest-news">Latest News</div>

      <div className="All-frontpage">
      <div className="FrontPage">
        {newsArray.slice(1).map((newsstory) => {
          return <NewsCard newsstory={newsstory} />;
        })}
      </div>
      <div className="aside-page">
        <span className="trending">Trending Headlines</span>
        {newsArray
          .filter((_, index) => {
            return index < 6;
          })
          .map((newsstory) => {
            return <NewsAside newsstory={newsstory} />;
          })}
      </div>
      </div>
      <input
        className="showmore"
        type="button"
        value="Show More"
        onClick={() => MoreNews()}
      />
    </>
  );
};

export default News;
