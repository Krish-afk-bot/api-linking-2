require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/Item');
const app = express();

app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// CRUD endpoints here (PUT and DELETE)
