import './../styles/top-posts.css';
import HeadingText from './heading-text';
import Catgorydate from './cat-dat';
const TopPostsComponent = (props)=>{
    return(
        <>
            <div className="top-posts-container">
                <HeadingText heading={"Top Posts"} /> 
                <div className="top-posts-item-container">
                {props.TopArray.map((item,index)=>{
                        var a;
                        if(index===0)
                        {
                            a = "1";
                        }
                        else{
                            a = "";
                        }
                        return(
                                <div className="top-posts-item" key={item.id}>
                                    <div className={"post-item item"+(a)}>
                                        <img src={item.image} alt=""></img>
                                        <div className={"post-item-description-container"+(a)}>
                                            <div className={"post-item-description"+(a)}>
                                                <p className={"post-item-title"+(a)}>
                                                    {item.title}
                                                </p>
                                                <p className={"post-number"+(a)}>{index+1}</p>
                                            </div>
                                            <div className="post-date">
                                                <Catgorydate category={"Travel"} date={"/ August 21 2017"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopPostsComponent;