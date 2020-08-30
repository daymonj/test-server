var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('responasfsadfsadfasdfsd with a resource');
});

router.get('/hoho', function(req, res, next) {
  res.json({name:'jaeyun',age:27});
});



module.exports = router;
