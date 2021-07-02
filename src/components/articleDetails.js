import './../styles/articleDetails.css';
import ProfileDetails from './profile';
import Social from './social';
import Tag from './tag';
import Clap from './clap';
import axios from 'axios';
import {useEffect,useState,useRef} from "react";

const ArticleDetails = ()=>{

    let componentMounted = useRef(true)
    let [ArticleDetailsArray,setArticleDetailsArray] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/articleDetails").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setArticleDetailsArray(localvariable);
        }
    }).catch((err)=>{
            console.log(err)
        })
        return () => { 
            componentMounted.current =false;  
        }
    },[])


    

    

    return(
        <div className="article-Deatils-Container">
            <h2 className="article-heading">{ArticleDetailsArray.heading}</h2>
            <div className="profile-container">
                <ProfileDetails name={ArticleDetailsArray.name}/> 
                <Social />                
            </div>
            <div className="article-desccription-container">
                <img src={ArticleDetailsArray.image1} alt="ReactImage" className="react-image"></img>
                <p className="article-paragraph">
                    {ArticleDetailsArray.paragraph}
                </p>
                <p className="article-paragraph">
                    {ArticleDetailsArray.paragraph2}
                </p>
                <img src={ArticleDetailsArray.image2} alt="CodeImage" className="codeImage"></img>
                {ArticleDetailsArray.tag?<Tag tag={ArticleDetailsArray.tag}/>:null}
                  
                <Clap />     
                <hr className="line"/>
                <ProfileDetails name={ArticleDetailsArray.footer} />
                <hr className="line"/>
            </div>
        </div>
        
    )
}
export default ArticleDetails;