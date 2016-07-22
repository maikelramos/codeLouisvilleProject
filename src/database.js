'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app', function (err) {
  if (err) {
    console.log('database error')
  } else {
    console.log('database ok')
  }
});
