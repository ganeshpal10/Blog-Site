const bsData = require('./module-bs/bsData');
const express = require('express')


const app = express()
const  Port = 3001;
app.listen(Port,()=>{
    console.log("Server is running")
})



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


//for Menu List 
app.get("/menu",(req,res)=>{
    const menu = bsData.menu();
    res.send(menu);
})


//for Featured list 
app.get("/featured",(req,res)=>{
    const blogData = bsData.featuredBs();
    res.send(blogData);
})


//for Latest 
app.get("/latest",(req,res)=>{
    const latest = bsData.latest();
    res.send(latest);
})


//for latest Articles
app.get("/latestArticle",(req,res)=>{
    const latestArticle = bsData.latestArticle();
    res.send(latestArticle);
})


//for Top Articles
app.get("/top-post",(req,res)=>{
    const topPost = bsData.topPost();
    res.send(topPost);
})


//for latestStories 
app.get('/latestStories',(req,res)=>{
    const latestStories = bsData.latestStories();
    res.send(latestStories);
})



//for Bollywood Data
app.get('/bollywood',(req,res)=>{
    const bollywood = bsData.bollywoodCat();
    res.send(bollywood);
})


//for ArticleDetails Data
app.get('/articleDetails',(req,res)=>{
    const articleDetails = bsData.articleDetails();
    res.send(articleDetails);
   
})


//for ArticleFooter Data
app.get('/articleFooter',(req,res)=>{
    const  articleFooter = bsData. articleFooter();
    res.send( articleFooter);
   
})



