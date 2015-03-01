var express = require('express');
var router = express.Router();

router.all('/user/*', require('./user'));
router.all('/post/*', require('./post'));

module.exports = router;
