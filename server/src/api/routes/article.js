const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const articleController = require('../controllers/articleController');
const checkAuth = require('../middleware/checkAuth');
const uploadImage = require('../middleware/uploadImage');

const router = express.Router();

router.get('/', catchErrors(articleController.getArticles));

router.post(
  '/',
  checkAuth,
  uploadImage.single('Image'),
  catchErrors(articleController.createArticle),
);

module.exports = router;
