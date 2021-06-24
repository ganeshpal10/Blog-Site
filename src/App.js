import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./components/home";
import Bollywood from "./components/bollywood";
import ArticlePage from "./components/articlePage";
import ScrollToTop from "./components/scrolltotop";
import './App.css'

const App = () =>{
  return(
   <BrowserRouter>
    <ScrollToTop />
    <Route basename = "/" component = {Home} exact></Route>
    <Route basename = "/bollywood" component = {Bollywood} exact></Route>
    <Route basename = "/articlepage" component = {ArticlePage} exact></Route>
   </BrowserRouter>
  )
}

export default App;