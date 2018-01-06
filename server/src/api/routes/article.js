const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.post('/', catchErrors(articleController.createArticle));

module.exports = router;
