const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config()
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))

const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/workouts', require('./routes/api/workouts'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.get('/api/quote', async (req, res) => {
  try {
    const response = await fetch('https://api.goprogram.ai/inspiration');
    const data = await response.json();
    const randomQuote = data.inspiration_quotes[Math.floor(Math.random() * data.inspiration_quotes.length)];
    res.json(randomQuote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

