import "./../styles/featured.css";
import React, {useEffect,useState,useRef} from "react";
import axios from 'axios';


let Featured = ()=>{

   
let componentMounted = useRef(true)
const delay = 4000;
const [index,setIndex] = useState(0);
const timeoutRef =useRef(null);
let [TitleArray,setArray] =useState([]);


useEffect(()=>{
    axios.get("http://localhost:3001/featured").then((response)=>{ 
    if(componentMounted){
        let localvariable = response.data;
        setArray(localvariable);
        
    }
}).catch((err)=>{
        console.log(err)
    })
    return () => { 
        componentMounted.current =false;  
    }
},[])

function resetTimeout(){
    if(timeoutRef.current)
    {
        clearTimeout(timeoutRef.current);
    }
}

let c;
useEffect(() => {
    
    let a = 3
    
    timeoutRef.current = setTimeout(
        ()=>
            setIndex((prevIndex)=>
            prevIndex === a - 1 ? 0:prevIndex + 1
    ),
    delay
    );
    return () => {
        resetTimeout();
    };
}, [index]);

if(window.outerWidth >= '320' && window.outerWidth <="720") 
    {
        c = {transform :`translate3d(0,${-index*367}px, 0)`};
    }
    else{
        c = {transform :`translate3d(0,0, 0)`}
    }
    
    return(
        <>
            <div className="slideshow">
                <div className = "featured-conatiner" style={c}> 
                    {TitleArray.map((item,index)=>{
                        let a;
                       if(index===0){
                        a = "1";
                        }
                        else
                    {
                        a = "2";
                        }
                        return(
                            <div className = {'featured-item'+(a)+' featured-item'} key={item.id}>
                                <img src={item.image} alt={"bg"+(a)}></img>
                                <div className={"title-contianer"+(a)}>
                                    <p className = "title">
                                        {item.title}
                                    </p>
                                    <p className = "date">
                                        {item.date}
                                    </p>
                                </div>
                            </div>        
                        )
                        
                    })
                }

                </div>
                <div className="slideshowDots" id="slideshowDots">
                    {TitleArray.map((_,idx)=>(
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active": ""}`}
                            onClick={()=>{
                                setIndex(idx);
                            }}
                            ></div>
                        
                    ))}
                </div>
            </div>
        </>
    )
   
}

export default Featured;