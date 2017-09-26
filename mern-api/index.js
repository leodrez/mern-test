const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = require('bluebird');
const dbpromise = mongoose.connect('mongodb://localhost:27017/mern', {
  useMongoClient: true
});
dbpromise.then(() => {
  console.log('Connected to DB'); 
});

const itemRouter = require('./src/routes/itemRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

app.listen(8080, function() {
  console.log('Server listening on port 8080');
});

