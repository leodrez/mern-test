const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mern')
  .then(() => {
    console.log('Connected to DB'); 
  })
  .then(err => {
    console.error(err);
    process.exit(1);
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

