import './../styles/latestStories.css';
import HeadingText from './heading-text';
import Smallpara from './small-para';
import Catgorydate from './cat-dat';
import LoadButton from './load-button'; 
import axios from 'axios';
import React, { useState,useEffect, useRef } from 'react';


const Lateststories = ()=>{

    
    let componentMounted = useRef(true)
    let[storiesArray,setstoriesArray] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/latestStories").then((response)=>{
            if(componentMounted){
            let localvariable = response.data;

            setstoriesArray(localvariable);
            }
        })
        return  () => { 
            componentMounted.current =false;  
        }
    },[])

    
    return(
        <>
            <div className="latest-stories-contianer">
                <HeadingText heading={"Latest Stories"}/>
                <div className="latest-stories-list">
                    {storiesArray.map((item,index)=>{
                        let a;
                        if(index===2)
                        {
                              a = "last"; 
                        }
                        else{
                            a = ""
                        }
                        return(
                            <div className={"latest-stories-item "+(a)} key={item.id}>
                                <p className="story-heading">{item.title}</p>
                                <Smallpara para={"story-para"} description={item.description}/> 
                                <Catgorydate category={item.category} date={item.date} />
                            </div>
                        )
                    })}
                    
                </div>
                <LoadButton button="Smallright" text="View More"/>
            </div>
        </>
    )
}
export default Lateststories;