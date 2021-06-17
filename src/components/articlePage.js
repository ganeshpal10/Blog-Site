import './../styles/articlePage.css'
import Siren from './siren';

const ArticlePage =()=>{
    return(
        <div className="article-page">
            <div className="article-heading-container">
                <Siren />
                <button type="button" className="get-started">Get started</button>
            </div>
            
        </div>
    )
}
export default ArticlePage;