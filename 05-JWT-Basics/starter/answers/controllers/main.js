'use strict';
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');
// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard
const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi
  // check in the controller
  
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  // for demo, in real-world projects the ID is provided by the database
  const id = new Date().getDate();

  // recommended, use long, complex and unguessable string value
  // keep the payload small for better UX
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
  console.log(username, password);
  // res.send('Fake Login/Register/Signup Route');
  res.status(200).json({msg: 'user created', token});
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});
  
};

module.exports = {
  login,
  dashboard,
};
