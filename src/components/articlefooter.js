import './../styles/articlefooter.css';
// import latestimg from "./../images/latest.png";
import ProfileDetails from './profile';
import React, {useEffect,useState,useRef} from "react";
import axios from 'axios';

const ArticleFooter =()=>{
    let componentMounted = useRef(true);
    let [ArticleFooterArray,setArticleFooterArray] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/articleFooter").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setArticleFooterArray(localvariable);
            
        }
    }).catch((err)=>{
            console.log(err)
        })
        return () => { 
            componentMounted.current =false;  
        }
    },[])

    
    return(
        <div className="article-footer">
            <div className="related-main-container">
                <p className="more">More From The Siren</p>
                <hr className="line-related"/> 
                <div className="related-container">
                    {ArticleFooterArray.map((item,index)=>{
                        return(
                            <div className="related-item" key={item.id}>
                                <p className="related-tag">{item.relatedTag}</p>
                                <div className="mobile-view">
                                    <p className="related-heading">{item.relatedHeading}</p>
                                    <p className="related-name">{item.relatedName}</p>
                                </div>
                                <img src={item.image} alt="" className="related-image"></img>
                                <h2 className="related-article-heading">{item.relatedArticleHeading}</h2>
                                <ProfileDetails name={item.profileDetails} />
                            </div>
                        )
                    })}
                </div>
            </div>    
        </div>
    )
}

export default ArticleFooter;