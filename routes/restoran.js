var express = require('express');
var router = express.Router();

/* sauna */
router.get('/', function(req, res, next) {
  res.render('restoran');
});

module.exports = router;
