const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();





app.use(express.json({limit: '10mb'}));
app.use(cookieParser());



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});