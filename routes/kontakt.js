var express = require('express');
var router = express.Router();

/* ktntk */
router.get('/', function(req, res, next) {
  res.render('kontakt');
});

module.exports = router;
