var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About us' });
});
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' });
});

module.exports = router;
