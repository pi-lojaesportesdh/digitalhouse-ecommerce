let fs = require("fs-extra");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let pathImage = "./public/images/produtos";
    cb(null, pathImage);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    console.log(file);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
