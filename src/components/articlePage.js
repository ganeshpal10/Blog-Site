import './../styles/articlePage.css'
import Siren from './siren';
import ClapShare from './clap-share';
import ArticleDetails from './articleDetails';
import ArticleFooter from './articlefooter';
const ArticlePage =()=>{

    return(
        <div className="article-page">
            <div className="article-container">
                <div className="article-heading-container">
                    <Siren />
                    <button type="button" className="get-started">Get started</button>
                </div>
                <ClapShare />
                <ArticleDetails />               
            </div>
            <ArticleFooter />
        </div>
    )
}
export default ArticlePage;