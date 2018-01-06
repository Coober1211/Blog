const mongoose = require('mongoose');
const slug = require('slug');

const articleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: 'You must supply title!',
    trim: true,
  },
  content: {
    type: String,
    required: 'You must supply content!',
  },
  slug: String,
  tags: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [
      {
        type: Number,
        // required: 'You must supply coordinates!',
      },
    ],
    address: {
      type: String,
      // required: 'You must supply address!',
    },
  },
  photo: String,
});

articleSchema.pre('save', async function handleSlug(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storeWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storeWithSlug.length) {
    this.slug = `${this.slug}-${this.storeWithSlug.length + 1}`;
  }
  return next();
});

module.exports = mongoose.model('Article', articleSchema);
