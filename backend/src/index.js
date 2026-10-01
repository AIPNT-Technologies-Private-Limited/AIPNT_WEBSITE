const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact.routes');

dotenv.config({path:'../.env'});
console.log('Mongo URI:', process.env.MONGODB_URI)




app.use(express.json({limit: '10mb'}));
app.use(cookieParser());

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });