const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "product_images",
//   allowedFormats: ["jpg", "png", "jpeg"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }],
// });
// const parser = multer({ storage: storage });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "product_images",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const parser = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.fieldname === "thumbnail") {
      // Custom handling for thumbnail
      // Apply different transformations or storage settings if needed
    }
    cb(null, true);
  },
}).fields([
  { name: "images", maxCount: 8 },
  { name: "thumbnail", maxCount: 1 },
]);


// const parser = multer({ storage: storage });

module.exports = parser;
