const express= require('express');
const path = require('path')
const app= express();
const port=process.env.PORT || 8000;

//run Static website
const staticpath=path.join(__dirname,'../public')
app.set('view engine','hbs');
app.use(express.static(staticpath));


//_____________________________________________________________________________________________________//

// Routing //

// Home page //
app.get("",(req,res)=>{
    res.render('index')
});

//About Page//
app.get("/about",(req,res)=>{
res.render('about')
});
//Weather checking page
app.get("/weather",(req,res)=>{
    res.render('weather')
});
app.get("*", (req,res)=>{
    res.render('404errorpage')
});



app.listen(port,()=>{
    console.log(`App is runnig ${port}`)
})