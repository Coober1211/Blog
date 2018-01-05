const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controller/userController');

const router = express.Router();


router.post(
  '/signup', userController.validateRegister,
  catchErrors(userController.createUser),
  catchErrors(userController.userLogin),
);

router.post('/login', catchErrors(userController.userLogin));

module.exports = router;
