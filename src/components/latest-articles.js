import './../styles/latest-articles.css';
import HeadingText from './../components/heading-text';
import Articleimage from './../images/article-image.jpg';
import Catgorydate from './cat-dat';
import LoadButton from './load-button';
import TopPostsImage from './../images/top-posts1.jpg';
import ArticleList from './articleList';
import SideContianer from './sideContainer';

const LatestArticles =()=>{

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
        <div className="latest-articles-container">
            <HeadingText heading={"Latest Articles"} />
            <div className="latest-articles-main-contianer">
                <div className="articles-list">
                    <ArticleList ArticleArray={ArticleArray} mainCategory={"Latest"} />
                    <LoadButton button={"Smalldown"} text={"LOAD MORE"} />
                    <div className="display-image">
                        <img src={Articleimage} alt=""></img>
                        <div className="display-title">
                            <p className="display-text">Title of Vertical gallery</p>
                            <Catgorydate category={"Travel"} date={"/ August 21 2017"}/> 
                        </div>
                    </div>
                </div>
                <SideContianer TopArray={TopArray} mainCategory={"Latest"} />
            </div>
        </div>
    )
}

export default LatestArticles;