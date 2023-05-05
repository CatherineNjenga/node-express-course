'use strict';
const jwt = require('jsonwebtoken');
const logon = async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    // pass the error to the error-handler middleware
    next({msg: 'Kindly provide name and password'});
  } else {
    const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn: '24h'}, (err, token) => {
      if (err) {
        // what kind of errors are handled here?
        next({msg: 'Something went wrong, kindly try again'});
      }

      console.log(token);
      res.status(200).json({ token: token }); 
    });
  }
};

const hello = async (req, res) => {
  console.log(req.user);
  let userName = req.user.name;
  res.status(200).json({message: `Hello, ${userName}. Welcome to our website.`});
};

module.exports = {
  logon,
  hello,
};