import './../styles/mainCatComponent.css';
import Articleimage from './../images/article-image.jpg';
import TopPostsImage from './../images/top-posts1.jpg';
import HeadingText from './heading-text';
import SideContianer from './sideContainer';
import ArticleList from './articleList';
import LoadButton from './load-button';

const MainCategory =()=>{
    let ArticleArray = [
        {
            id:'1',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'2',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'3',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'4',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'5',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'6',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'7',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            description:"Gujarat is vastly underrated and it's a \nmystery to us why the region isn't more well-",
            category:"Travel",
            date:" / August 21 2017"
    
        }
    ]
    let TopArray = [
        {
            id:'1',
            image:`${TopPostsImage}`,
            title:`Catch waves with \n an adventure guide`,
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'2',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'3',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            category:"Travel",
            date:" / August 21 2017"
    
        },
        {
            id:'4',
            image:`${Articleimage}`,
            title:`Catch waves with \n an adventure guide`,
            category:"Travel",
            date:" / August 21 2017"
    
        },
    ]
    return(
        <div className="main-category-container">
            <div className="category-container">
                <HeadingText  heading={"Bollywood"}/>
                <ArticleList mainCategory={"Bollywood"} ArticleArray={ArticleArray}/>
            </div>
            <SideContianer mainCategory={"Bollywood"} TopArray={TopArray}/>
            <LoadButton button={"Bigdown"} text={"Load More"} />
        </div>
    )
}
export default MainCategory;