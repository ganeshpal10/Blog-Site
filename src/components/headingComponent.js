import React, { useState,useEffect, useRef } from 'react';
import './../styles/heading.css';
import Siren from './siren';
import axios from 'axios';



const Heading = () =>{

   
    let componentMounted = useRef(true)
    let [menuItem,setItem] =useState([]);

    useEffect(()=>{
        
        axios.get("http://localhost:3001/menu").then((response)=>{ 
        if(componentMounted){
            let localvariable = response.data;
            setItem(localvariable);
            
        }
        
      }).catch((err)=>{
            console.log(err)
        })


        return () => { 
            componentMounted.current =false;  
        }

    },[])


    const openMenu=()=>{
        let a = document.getElementById("Menu");
        
        if(a.className==="menu")
        {
            a.className += " responsive"
                        
        }
        else{
            a.className = "menu";
        }
        
    }
    return(
        <>
            <div className = "headingContainer">
                <div className ="mobile-heading-container">
                    <Siren />
                    <div className="menu-icon">
                        <i className="fa fa-bars" onClick={openMenu}></i>
                    </div>
                </div>
                <div className="menu-container">
                    <div className = "menu"  id="Menu">
                        <ul className = "menu-items">
                            {
                                menuItem.map((element)=>{
                                   return(<li key={element.id}>{element.item}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading;