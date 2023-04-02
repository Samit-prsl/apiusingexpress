const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const apidata = require('./data.json')
app.get('/',(req,res)=>{
    res.status(200).send("This is Home Page , go the 'Services' route to check the json output")
})

app.get('/Services',(req,res)=>{
    res.send(apidata)
})

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})



