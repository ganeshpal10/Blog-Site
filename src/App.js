import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./components/home";
import Bollywood from "./components/bollywood";
import ArticlePage from "./components/articlePage";
import ScrollToTop from "./components/scrolltotop";
import './App.css'

const App = () =>{
  return(
   <BrowserRouter basename = "/Blog">
    <ScrollToTop />
    <Route path = "/" component = {Home} exact></Route>
    <Route path = "/bollywood" component = {Bollywood} exact></Route>
    <Route path = "/articlepage" component = {ArticlePage} exact></Route>
   </BrowserRouter>
  )
}

export default App;