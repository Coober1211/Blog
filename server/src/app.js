const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./api/routes/user');
const expressValidator = require('express-validator');

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@ds239117.mlab.com:39117/blog-db`);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', userRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
