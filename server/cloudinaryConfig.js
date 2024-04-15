const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
// console.log(
//   process.env.CLOUD_NAME,
//   process.env.CLOUD_API_KEY,
//   process.env.CLOUD_SECRET_KEY
// );

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "product_images",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const parser = multer({ storage: storage });

module.exports = parser;
