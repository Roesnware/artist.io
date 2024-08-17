// import mongoose
const { model, Schema} = require('mongoose');

// user schmea
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },

  userSince: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', userSchema);

// export user schema
module.exports = User