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

module.exports = mongoose.model('User', schema);
