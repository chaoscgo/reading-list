const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true,},
    author: {type: String, required: true,},
    finishedReading: {type: Boolean,},
    recommend: {type: Boolean},
    notes: {type: String,},
    bookCoverUrl: {type: String,},
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  books: [bookSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;