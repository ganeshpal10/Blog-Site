import './../styles/load-button.css';
import Bigdown from './../images/logo/bigdown.png';
import Smalldown from './../images/logo/smalldown.png';
import Bigright from './../images/logo/bigright.png';
import Smallright from './../images/logo/small-right.png';
import {Link} from 'react-router-dom';

const LoadButton =(props)=>{
    let button;
    if(props.button==="Bigdown")
    {
        button = Bigdown;
        return(
            <>
                <Link to="/articlepage">
                    <div className={"load-more "+(props.button)}>
                        <img src={button} alt=""></img>
                        <span>{props.text}</span>
                    </div>
                </Link>
            </>
        )
    }
    else if (props.button==="Smalldown") {
        button = Smalldown;
        return(
            <>
                <div className={"load-more "+(props.button)}>
                    <img src={button} alt=""></img>
                    <span>{props.text}</span>
                </div>
            </>
        )
    } else if(props.button==="Bigright"){
        button = Bigright;
        return(
            <>
                <div className={"load-more "+(props.button)}>
                    <span>{props.text}</span>
                    <img src={button} alt=""></img>
                </div>
            </>
        )
    }
    else{
        button = Smallright;
        return(
            <>
                <Link to="/bollywood">
                    <div className={"load-more "+(props.button)}>
                        <span>{props.text}</span>
                        <img src={button} alt=""></img>
                    </div>
                </Link>
            </>
        )
    }
}
export default LoadButton;