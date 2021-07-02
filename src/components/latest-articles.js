import './../styles/latest-articles.css';
import HeadingText from './../components/heading-text';
import Catgorydate from './cat-dat';
import LoadButton from './load-button';
import ArticleList from './articleList';
import SideContianer from './sideContainer';
import axios from 'axios';
import React, { useState,useEffect, useRef } from 'react';

const LatestArticles =()=>{

    let componentMounted = useRef(true)
let[ArticleArray,setArticleArray]=useState([]);
let[TopArray,setTopArray]=useState([]);


useEffect(()=>{
    axios.get("http://localhost:3001/latestArticle").then((response)=>{
        if(componentMounted){
            let localvariable = response.data;

            setArticleArray(localvariable);
        }
    }).catch((error)=>{
        console.log(error);
    })

    axios.get("http://localhost:3001/top-post").then((response)=>{
        if(componentMounted){
            let localvariable = response.data;

            setTopArray(localvariable);
        }
    }).catch((error)=>{
        console.log(error);
    })

    return () => { 
        componentMounted.current =false;
    }

},[])

    return(
        <div className="latest-articles-container">
            <HeadingText heading={"Latest Articles"} />
            <div className="latest-articles-main-contianer">
                <div className="articles-list">
                    <ArticleList ArticleArray={ArticleArray} mainCategory={"Latest"} />
                    <LoadButton button={"Smalldown"} text={"LOAD MORE"} />
                    <div className="display-image">
                        <img src='images/article-image.jpg' alt=""></img>
                        <div className="display-title">
                            <p className="display-text">Title of Vertical gallery</p>
                            <Catgorydate category={"Travel"} date={"/ August 21 2017"}/> 
                        </div>
                    </div>
                </div>
                <SideContianer TopArray={TopArray} mainCategory={"Latest"} />
            </div>
        </div>
    )
}

export default LatestArticles;