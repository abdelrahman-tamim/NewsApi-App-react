import './NewsAside.css'
const NewsAside =({newsstory})=>{

    return (
        <>
       <div className="aside-news">
        <img className="aside-img" src={newsstory.urlToImage}/>
        <p className='aside-source'> Source: {newsstory.source.name}</p>
        <a href={newsstory.url}><p className="aside-title">{newsstory.title}</p></a>
        <p>{newsstory.publishedAt}</p>
       </div>
        </>
    )
}

export default NewsAside