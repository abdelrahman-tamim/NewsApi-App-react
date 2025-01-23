import './NewsCard.css'

const NewsCard =({newsstory,className})=>{

    return(
        <>
        <div className= "newsCard">
            <img className="newsphoto" src={newsstory.urlToImage} alt="" />
          
            
            <p className='timeanddate'>{newsstory.author} - {newsstory.publishedAt}</p>
           
             <a href={newsstory.url}> <p className='newstitle'>{newsstory.title}</p></a> 
            <div className='news-desc'>{newsstory.description}</div>
        </div>
       

        </>
    )
}

export default NewsCard