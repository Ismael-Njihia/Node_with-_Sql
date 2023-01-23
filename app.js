const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
})

const mysql = require('mysql');


const db = mysql.createConnection({

    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

app.use(express. urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'hbs');


db.connect((err) => {
    if (err) {
        throw err;
    }else{
        console.log("Mysql Connected...")
    }
});



//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
   

app.listen(3002, ()=>{
    console.log("Server is running on port 3002")
})