const express = require('express');
const app = express()
const port = 5000;
const categories = require('./Data/Catagories.json');
const news = require('./Data/News.json')
const cors = require('cors')


app.use(cors())
app.get('/', (req, res)=>{
    res.send('hellowww ladies')
})
app.get('/categories', (req,res)=>{
res.send(categories)
})

// 3 dhoroner news dekhanor way
// 1 news a gele news ke dekhabe sob
app.get('/news', (req,res)=>{
    res.send(news)
})

// 2 news er id onujayi news dekhabe 
app.get('/news/:id', (req, res)=>{
    const id = req.params.id 
   const selectedItem = news.find(n=> n._id === id)
   res.send(selectedItem)
})

// 3 category section wise news dekhabe 
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }
    else{

        const categoryNews = news.filter(n=> n.category_id == id)
        res.send(categoryNews)
    }
})

app.listen(port,()=>{
    console.log({port})
})