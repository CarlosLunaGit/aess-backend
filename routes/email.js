const express = require('express');
const router = express.Router();

const { sendEmail } = require('../controllers/emailController');

router.post('/post-email', sendEmail);

module.exports = router;
