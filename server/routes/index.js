var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/add', (req, res) => {
    res.render('Work/add', { title: 'Add' }); 
});

module.exports = router;
