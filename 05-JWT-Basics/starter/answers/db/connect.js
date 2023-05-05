'use strict';
const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect({
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;