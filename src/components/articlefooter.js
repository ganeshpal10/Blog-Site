import './../styles/articlefooter.css';
import latestimg from "./../images/latest.png";
import ProfileDetails from './profile';

const ArticleFooter =()=>{
    return(
        <div className="article-footer">
            <div className="related-main-container">
                <p className="more">More From The Siren</p>
                <hr className="line-related"/> 
                <div className="related-container">
                    <div className="related-item">
                        <p className="related-tag">Also tagged Reactjs</p>
                        <div className="mobile-view">
                            <p className="related-heading">Performance Comparsion for 5 Javascript Object iterations</p>
                            <p className="related-name">Dmitry Nozhenko</p>
                        </div>
                        <img src={latestimg} alt="" className="related-image"></img>
                        <h2 className="related-article-heading">Joshua Tree{'\n'}Overnight Adventure</h2>
                        <ProfileDetails name="name" />
                    </div>       
                    <div className="related-item">
                        <p className="related-tag">Related reads </p>
                        <div className="mobile-view">
                            <p className="related-heading">Performance Comparsion for 5 Javascript Object iterations</p>
                            <p className="related-name">Dmitry Nozhenko</p>
                        </div>
                        <img src={latestimg} alt="" className="related-image"></img>
                        <h2 className="related-article-heading">Joshua Tree{'\n'}Overnight Adventure</h2>
                        <ProfileDetails name="name" />
                    </div>       
                    <div className="related-item">
                        <p className="related-tag">Related reads </p>
                        <div className="mobile-view">
                            <p className="related-heading">Performance Comparsion for 5 Javascript Object iterations</p>
                            <p className="related-name">Dmitry Nozhenko</p>
                        </div>
                        <img src={latestimg} alt="" className="related-image"></img>
                        <h2 className="related-article-heading">Joshua Tree{'\n'}Overnight Adventure</h2>
                        <ProfileDetails name="name" />
                    </div>   
                </div>
            </div>    
        </div>
    )
}

export default ArticleFooter;