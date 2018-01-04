const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();
const User = require('../models/User');

const validateRegister = async (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name').notEmpty();
  req.checkBody('email', 'That email is not valid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gamil_remove_subaddress: false,
  });
  req.checkBody('password', 'Password cannot be blank').notEmpty();
  // should add password confirme
  const errors = req.validationErrors();
  if (errors) {
    res.status(500).json({
      message: errors.map(err => err.msg),
    });
    return;
  }
  next();
};


const createUser = async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await User.find({ email });
  if (emailExist.length > 0) {
    res.status(409).json({ message: 'Email exists' });
    return;
  }
  const hash = await bcrypt.hash(req.body.password, 10);
  await new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: hash,
  }).save();
  next();
};

const userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: '1h',
        },
      );
      res.status(200).json({ message: 'User login!', token });
      return;
    }
  }
  res.status(401).json({ message: 'Auth failed' });
};


router.post('/signup', validateRegister, catchErrors(createUser), catchErrors(userLogin));
router.post('/login', catchErrors(userLogin));

module.exports = router;
