const express = require('express');
const app = express();
const itemRouter = express.Router();

let Item = require('../models/Item');

itemRouter.route('/add/post').post(function (req, res) {
  let Item = new Item(req.body);
  item.save()
  .then(item => {
    res.json('Item added successfully'); 
  })
  .catch(err => {
    res.status(400).send('Save to database failed'); 
  });
});

itemRouter.route('/').get(function (req, res) {
  Item.find(function (err, data) {
    if (err) {
      console.log(err); 
    } else {
      res.json(data);  
    }
  });
});

itemRouter.route('edit/:id').get(function (req, res) {
  let id = req.params.id;

  Item.findById(id, function (err, data) {
    if (err) {
      console.log(err); 
    } else {
      res.json(data); 
    }
  });
});

itemRouter.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function (err, data) {
    if (!data) {
      return next(new Error('Unable to load document')); 
    } else {
      data.data = req.body.data;

      data.save().then(data => {
        res.json('Update successfull'); 
      })
      .catch(err => {
        res.status(400).send('Unable to update database'); 
      });
    }
  });
});

itemRouter.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({ _id: req.params.id }),
    function(err, data) {
      if(err) res.json(err);
      else res.json('Successfully deleted');
    }
});

module.exports = itemRouter;
