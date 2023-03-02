const express = require('express');

// const homeRoutes = require('./home-route.js');
const apiRoutes = require('./api');

const app = express();

// router.use('/', homeRoutes);
app.use('/api', apiRoutes);

module.exports = app;


