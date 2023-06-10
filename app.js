const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + "/public"));

/*
app.get("/", (res,req)=>{
    const fetchUrl = req.url;
    if(fetchUrl == "/"){
        res.sendFile(__dirname + "/index.html");
    }
    else if(fetchUrl == "/about"){
        res.sendFile(__dirname + "/pages/about.html");
    }
    else{
        res.sendFile(__dirname + "/pages/404.html");
    }
})
*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname + "/pages/about.html");
})
app.get('/terms', (req,res)=>{
    res.sendFile(__dirname + "/pages/terms-and-conditions.html");
})
app.get('/privacy', (req,res)=>{
    res.sendFile(__dirname + "/pages/privacy-policy.html");
})
app.get('/projects', (req,res)=>{
    res.sendFile(__dirname + "/pages/projects.html");
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + "/pages/contact.html");
})


//project routes
app.get('/project/1', (req,res)=>{
    res.sendFile(__dirname + "/projects/digigen/index.html");
})

app.get('/project/2', (req,res)=>{
    res.sendFile(__dirname + "/projects/personalDesign/index.html");
})

app.get('/project/3', (req,res)=>{
    res.sendFile(__dirname + "/projects/personalport/index.html");
})

app.get('/project/4', (req,res)=>{
    res.sendFile(__dirname + "/projects/startupAgen/index.html");
})

app.get('/project/5', (req,res)=>{
    res.sendFile(__dirname + "/projects/uxlancer/index.html");
})

app.get('/project/6', (req,res)=>{
    res.sendFile(__dirname + "/projects/webdev/index.html");
})


app.listen(3000,()=>{
    console.log("server is Listening");
})
