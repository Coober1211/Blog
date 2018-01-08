const mongoose = require('mongoose');
const Article = require('../models/Article');

exports.getArticles = async (req, res) => {
  const articles = await Article.find().select('-__v -location');
  res.status(200).json({
    message: 'Success get all articles',
    count: articles.length,
    articles,
  });
};

exports.createArticle = async (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  const Image = req.file.path || '';
  const article = await new Article({
    _id: new mongoose.Types.ObjectId(),
    title,
    content,
    Image,
  }).save();
  res.status(200).json({ article });
};

