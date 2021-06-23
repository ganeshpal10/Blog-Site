import './../styles/clapShare.css';
import Share from './../images/Postpage-web – 1/share.png';
import Clap from './clap';
const ClapShare = ()=>{
    return(
        <div className="clap-fixed-container">
           <Clap /> 
            <div className="share-container">
                <img src={Share} alt=""></img><p className="share-content">Share this article</p>
            </div>         
        </div>
    )
}

export default ClapShare;