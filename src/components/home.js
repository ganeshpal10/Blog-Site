import React from "react";
import Heading from "./headingComponent";
import './../styles/home.css'
import Featured from "./featured";
import Latest from "./latest";
import LatestArticles from "./latest-articles";
import Lateststories from "./latestStories";

const Home = ()=>{
    return(
        <div className = "home">
            <Heading/>
            <Featured/>
            <Latest/>
            <LatestArticles/>
            <Lateststories />
        </div>
    )
}

export default Home;


