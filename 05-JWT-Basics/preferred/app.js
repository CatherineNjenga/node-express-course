'use strict';

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  require('dotenv').config();

const errorHandler = require('./middleware/error-handler');

const mainRouter = require('./routes/main');

app.use(express.json());
// routes
app.use('/api/v1', mainRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});