// ================================================
// 	DEFAULT CONFIGURATIONS
// ================================================
require('./config/config');

// ================================================
// 	REQUIRES
// ================================================
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// ================================================
// 	DATABASE
// ================================================
mongoose.connect(process.env.URLDB, (err, res) =>{
    if(err) throw err;

    console.log('DATABASE ONLINE');
})

// ================================================
// 	GLOBAL ROUTES
// ================================================

app.use(cors());
app.use( require('./routes/index'));


app.listen(process.env.PORT, ()=> { console.log('Listen on Port ', process.env.PORT);})