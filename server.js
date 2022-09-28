'use strict';

// This will be our server!!


// this section is for our set up:
//--------------

require('dotenv').config();
// express server
const express = require('express');
// allows for CORS
const cors = require('cors');
//cors stans for cross origin resource sharing

// in order to load data
const data = require('./data.data.json');
//start our server
const app = express();

// Middleware
app.use(cors());

// Declare our PORT variale
const PORT = process.env.PORT || 3001;
// port server is a backup or fail safe

//listening for connection
app.listen(PORT, () => console.log('Listening on port ${PORT}'));

// Endpoints:
//---------------

app.get('/', (req, res) => {
    //sends a response
    res.send('hello from the home route')
})



