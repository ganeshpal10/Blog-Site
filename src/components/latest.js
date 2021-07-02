import "./../styles/latest.css";

import HeadingText from "./heading-text";
import Catgorydate from "./cat-dat";
import Smallpara from "./small-para";
import axios from "axios";
import React, { useState,useEffect, useRef } from 'react';


const Latest = ()=>{
    let componentMounted = useRef(true);
    let[latest,setlatest] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/latest").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setlatest(localvariable);
        }
        }).catch((err)=>{
            console.log(err)
        })

        return () => { 
            componentMounted.current =false; 
        }
    },[])

    
        return(
            <div className="latest-contianer">
                <HeadingText heading={"The Latest"}/>
                 <div className="latest-container-list">
                    {latest.map((item)=>{
                        return(
                            <div className="latest-container-item" key={item.id}>
                                <img src={item.image} alt="latest"></img>
                                <div className="content">
                                    <h2 className="latest-title-heading">{item.heading}</h2>
                                    <Smallpara para={"para"} description={item.description}/>
                                    <Catgorydate category={item.category} date={item.date}/>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
}

export default Latest;