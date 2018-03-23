var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config()
const express = require('express');
const router = express.Router()
const path = require('path');
const app = express();
const storiesRoutes = require('./api/controllers/StoryController.js')

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const dbURL = process.env.MONGO_DB_URL || 'mongodb://heroku_3zpz7203:14qputbmokpe2kqkuhpuqfi84c@ds123259.mlab.com:23259/heroku_3zpz7203';

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
    const port = process.env.PORT || 5000;
    app.listen(port);
    console.log(`Password generator listening on ${port}`);
  }
})

//Routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Bonjour API' });
});

app.use('/api/stories', storiesRoutes);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
