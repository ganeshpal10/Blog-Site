import React from 'react';
import './../styles/heading.css';
import Siren from './siren';




const Heading = () =>{
    let menuItem = [
        {
            id:"1",
            item:"Home"
        },
        {
            id:"2",
            item:"Bollywood"
        },
        {
            id:"3",
            item:"Technology"
        },
        {
            id:"4",
            item:"Hollywood"
        },
        {
            id:"5",
            item:"Fitness"
        },
        {
            id:"6",
            item:"Food"
        },
    ]

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