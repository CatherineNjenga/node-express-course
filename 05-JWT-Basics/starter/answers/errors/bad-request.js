'use strict';

const CustomAPIError = require('../errors/custom-error');
const {StatusCodes} = require('http-status-codes');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;