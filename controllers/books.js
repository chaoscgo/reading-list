const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
    try {
      res.render('books/index.ejs');
    } catch (error) {
      console.log(error)
      res.redirect('/');
    }
});

router.get('/new', async (req, res) => {
  res.render('books/new.ejs');
});

module.exports = router;