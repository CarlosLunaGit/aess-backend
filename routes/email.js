var express = require('express');
var router = express.Router();

var { sendEmail } = require('../controllers/emailController');

router.post('/post-email', sendEmail);

module.exports = router;
