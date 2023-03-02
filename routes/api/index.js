const express = require('express');

const { router } = require('..');
const notesRouter = require('./notesRoutes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
