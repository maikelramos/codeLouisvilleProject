'use extrict';

var express = require('express');

var app = express();

var parser = require('body-parser');

var People = require('./models/people.js')

require('./database')

app.use('/', express.static('public'));
app.use(parser.json())

var router = express.Router();

router.get('/app', function (req, res) {
  People.find({}, function (err, people) {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({people: people})

  });
});
router.delete('/app/:id', function(req, res) {
  var id = req.params.id;
  People.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});
router.post('/app', function (req, res) {
  var person = req.body;

  People.create(person, function (err, person) {
    if (err) {
      return
       res.status(500).json({message: err.message});
    }
    res.json({'person': person, 'message': "created"});
  });
})

app.use('/api', router);


app.listen(5000, function() {
    console.log("The server is running on port 5000!");
});
