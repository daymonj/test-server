var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hoho', function(req, res, next) {
  res.json('hohohohoho login login');
});



module.exports = router;
