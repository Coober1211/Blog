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
  const {
    title, content, type, tags, abstract,
  } = req.body;
  // eslint-disable-next-line
  // console.log(title, content, type, tags);
  const Image = (req.file && req.file.path) || '';
  const article = await new Article({
    _id: new mongoose.Types.ObjectId(),
    title,
    content,
    type,
    tags,
    abstract,
    Image,
  }).save();
  res.status(200).json({ article });
};

exports.updateArticle = async (req, res) => {
  const { slug } = req.params;
  const Image = (req.file && req.file.path) || '';
  const {
    title, content, type, tags, abstract,
  } = req.body;
  const updateOptions = {
    title, content, type, tags, abstract, Image,
  };
  await Article.update({ slug }, { $set: updateOptions });
  res.status(200).json({
    message: 'Update successfully',
  });
};

