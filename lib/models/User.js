const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
  email: {
    type: String, 
    required: true, 
    unique: true
  }, 
  passwordHash: {
    type: String, 
    required: true
  }

}, 
{

  toJSON: {
    transform: (document, returned) => {
      delete returned.passwordHash;
    }
  }

});

schema.virtual('password').set(function(password) {
  //second argument of hasSync determines how many cycles it will go through to waste time
  this.passwordHash = bcrypt.hashSync(password, 10);
});

module.exports = mongoose.model('User', schema);
