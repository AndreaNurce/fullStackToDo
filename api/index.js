const express = require('express')
const mongoose =  require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const { Data } = require('./model');
dotenv.config();

const app = express()
app.use(cors)

mongoose.connect(process.env.URL,()=>console.log("Connected to db"));



app.listen(process.env.PORT || 5000, () => console.log(`Server up and runnig on port ${process.env.PORT}`));