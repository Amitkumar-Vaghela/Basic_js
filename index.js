let express = require("express")

let app = express()  // kept in var app
app.use(express.json())  // when app get json data

//route
app.get("/",(req,res)=>{
    res.send({status:1, msg:"Homepage API"})
})

app.get('/news' ,(req,res)=>{
    res.send({status:1, msg:"News page  API"})
})

app.get('/product',(req,res)=>{
    res.send({status:1, msg:"this is prdouct api"})
})

app.post('/Login' , (req,res)=>{
    console.log(req.body)  // body add karne bad object for in key:value
    res.send({status:1, msg:"This is login post API", data:req.body})
})
app.listen("8000")   