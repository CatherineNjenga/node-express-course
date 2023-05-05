'use strict';

const express = require('express'),
  router = express.Router();

const authenticationMiddleware = require('../middleware/auth');

const {logon, hello} = require('../contollers/main');
router.route('/logon').post(logon);
router.route('/hello').get(authenticationMiddleware, hello);

module.exports = router;