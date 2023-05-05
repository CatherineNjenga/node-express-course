'use strict';
const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // error
    next({msg: 'unauthorized'});
  } else {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({message: 'unauthorized'});
      }
      const {name} = decoded;
      req.user = {name};
      next();
    });
  }
};

module.exports = authenticationMiddleware;