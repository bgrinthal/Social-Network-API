// Require express and mongoose
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');

// const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log(`${req.method} requested on endpoint ${req.path}`);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// app.use(express.static('public'));

// Log mongoose queries
mongoose.set('debug', true);

// app.listen(PORT, () => console.log(`Now connected on localhost:${PORT} `));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on localhost:${PORT}!`);
    });
  });