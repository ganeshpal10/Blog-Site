import './../styles/sideContianer.css';
import TopPostsComponent from './top-posts';

const SideContianer =(props)=>{
    if(props.mainCategory==="Latest")
    {
        return(
            <div className="side-contianer">
                <div className="ad">
                   Advertisement
                </div>
                <TopPostsComponent TopArray={props.TopArray} />
            </div>
        )
    }
    else{
        return(
            <div className="side-contianer">
                <TopPostsComponent TopArray={props.TopArray} />
                <div className="ad">
                   Advertisement
                </div>
            </div>
        )
    }
    
}
export default SideContianer;