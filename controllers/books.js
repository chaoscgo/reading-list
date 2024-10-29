const express = require('express');
const router = express.Router();

const User = require('../models/user.js');


//index route
router.get('/', (req, res) => {
    try {
      res.render('books/index.ejs');
    } catch (error) {
      console.log(error)
      res.redirect('/');
    }
});

//new route
router.get('/new', async (req, res) => {
  res.render('books/new.ejs');
});


//create route
router.post('/', async (req, res) => {
  try {

    if (req.body.finishedReading === "on") {
      req.body.finishedReading = true;
    } else {
      req.body.finishedReading = false;
    }

    if (req.body.recommend === "on") {
      req.body.recommend = true;
    } else {
      req.body.recommend = false;
    }
  
    const currentUser = await User.findById(req.session.user._id);

    currentUser.books.push(req.body);
    await currentUser.save();
 
    res.redirect(`/users/${currentUser._id}/books`);
  } catch (error) {
 
    console.log(error);
    res.redirect('/')
  }
});


module.exports = router;