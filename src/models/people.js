'use strict';

var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  business: String,
  email: String,
  phoneNumber: String
});

var model = mongoose.model('People', peopleSchema);
module.exports = model;
/*(function Connect(){
  var mongo = require('mongodb'),
  port = 56854;

  var db = new mongo.Db('test', new mongo.Server('localhost',port {}), {});

  db.open(function(){});
  console.log(db);
})();*/
