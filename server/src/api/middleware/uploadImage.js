const multer = require('multer');

const multerOptions = {
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, './uploads/image');
    },
    filename: (req, file, next) => {
      next(null, new Date().toLocaleString() + file.originalname);
    },
  }),
  fileFilter: (req, file, next) => {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That filetype is not allowed!' }, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};

module.exports = multer(multerOptions);
