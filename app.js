require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();

//db connection
mongoose.connect('mongodb://localhost:27017/restapi');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')
);
db.once('open', function () {
        console.log('We are connected Cardwell')
    });

app.listen(process.env.PORT,()=>{
    console.log('Listening on port:'+ process.env.PORT);
})