const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/profile', profileRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('connected to DB!')
);

// Start listening to the server
app.listen(3000, () => console.log('Server up and running on port 3000'));

