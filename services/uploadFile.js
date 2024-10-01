
const multer = require("multer");
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads');
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const fileFilter = (req, file, cb) => {
  try {
    const typeAllow = ["jpg", "png", "jpeg"];
    const splitType = file.mimetype.split("/")[1];
    if (!typeAllow.includes(splitType)) {
      req.fileType = file.mimetype;
      cb(null, false);
    } else {
      cb(null, true);
    }
  } catch (err) {
    console.log(err);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = { upload };
