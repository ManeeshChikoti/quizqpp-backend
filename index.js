const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');

const app = express()
app.use(cors());
app.use(express.json());
app.use('/', router)

const PORT = process.env.PORT || 5000;

const URL="mongodb+srv://Maneesh:chikoti@cluster0.wosw3.mongodb.net/quizapp?retryWrites=true&w=majority";
mongoose.connect(URL).then(()=>{
    try{
        app.listen(PORT, () => {
            console.log("Server is  Running on"+" "+PORT)
        })
    } catch(err){
        console.log(err)
    } 
}) 