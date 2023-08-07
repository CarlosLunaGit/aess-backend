const express = require('express');
const router = express.Router();

const emailRoutes = require('./email');

router.use('/email', emailRoutes);

module.exports = router;
