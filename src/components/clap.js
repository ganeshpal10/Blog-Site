import './../styles/clap.css';
import ClapImage from './../images/Postpage-web – 1/clap.png';

const Clap =()=>{
    return(
        <div className="clap-container">
            <img src={ClapImage} alt=""></img><p className="like">9.3K</p>
        </div>
    )
}

export default Clap;
