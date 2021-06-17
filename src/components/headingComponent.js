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
    return(
        <>
            <div className = "headingContainer">
                <Siren />
                <div className = "menu">
                    <ul className = "menu-items">
                        {
                            menuItem.map((element)=>{
                               return(<li key={element.id}>{element.item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Heading;