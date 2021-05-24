// Before rur this code 
// You need to install Node.js, set up npm init!
// And then install express, nodemon, body-perser
// And nodemon yourfile.js 

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5500

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"))
app.post('/', function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var calculate = weight/(height*height);
    res.send("Your BMI index is "+calculate)
})
app.listen(port, () => console.log(`Example app listening on port 5500!`))