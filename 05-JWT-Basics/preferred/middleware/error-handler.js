'use stict';

const errorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({msg: err.msg});
  }
  console.log(err.msg);
  return res.status(500).send('Something went wrong');
};

module.exports = errorHandler;
