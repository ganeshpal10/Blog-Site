import './../styles/mainCatComponent.css';
import HeadingText from './heading-text';
import SideContianer from './sideContainer';
import ArticleList from './articleList';
import LoadButton from './load-button';
import axios from 'axios';
import React, {useEffect,useState,useRef} from "react";

const MainCategory =()=>{
    let componentMounted = useRef(true);

    let [ArticleArray,setArticleArray] = useState([]);
    let [TopArray,setTopArray] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/bollywood").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setArticleArray(localvariable);
            
        }
    }).catch((err)=>{
            console.log(err)
        })
        axios.get("http://localhost:3001/top-post").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setTopArray(localvariable);
            
        }
    }).catch((err)=>{
            console.log(err)
        })

        return () => { 
            componentMounted.current =false;  
        }
    },[])

    return(
        <div className="main-category-container">
            <div className="category-container">
                <HeadingText  heading={"Bollywood"}/>
                <ArticleList mainCategory={"Bollywood"} ArticleArray={ArticleArray}/>
                <LoadButton button={"Bigdown"} text={"Load More"} />
            </div>
            <SideContianer mainCategory={"Bollywood"} TopArray={TopArray}/>
            
        </div>
    )
}
export default MainCategory;