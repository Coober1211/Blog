const mongoose = require('mongoose');
const Article = require('../models/Article');

exports.createArticle = async (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  const article = await new Article({
    _id: new mongoose.Types.ObjectId(),
    title,
    content,
  }).save();
  res.status(200).json({ article });
};

