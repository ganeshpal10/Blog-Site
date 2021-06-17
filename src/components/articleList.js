import './../styles/articleList.css';
import Smallpara from './small-para';
import Catgorydate from './cat-dat';

const ArticleList =(props)=>{
    return(
        <>
            {props.ArticleArray.map((item,index)=>{
                if(index===0){
                    if(props.mainCategory==="Latest"){
                        var a = 1;
                    }
                    else{
                        a = "";
                        var b = "top";
                    }
                }
                else{
                    a = ""
                }
                return(
                    <div className="articles-item" key={item.id} id={b}>
                        <div className={"article-image-container"+(a)}>
                            <img src={item.image} alt="article"></img>
                        </div>
                        <div className="articles-description">
                            <p className={"article-title"+(a)}>{item.title}</p>
                            <Smallpara para={"description"+(a)} description={item.description} />
                            <Catgorydate category={item.category} date={item.date}/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default ArticleList;