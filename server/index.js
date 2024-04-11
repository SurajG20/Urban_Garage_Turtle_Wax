const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./models/Users");
const SECRET_KEY = "airbnbsecretkey";
const bcrypt = require("bcrypt");
const multer = require("multer");
const Place = require("./models/Place");
// image downloader
const axios = require("axios");
const fs = require("fs");
const path = require("path");



// middleswares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// jwt  middleware
const authenticateMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Assuming the token is sent in the Authorization header
    const decodedToken = jwt.verify(token, "yourSecretKeyHere");
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};


// Mongoose connection
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://airbnb:akshit123@cluster0.gzr9dgg.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
connectToDatabase();


//  multer code for file upload images
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const uniqueFilename = `airbnb-Image-${timestamp}.jpg`;
    cb(null, uniqueFilename);
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image file provided" });
  }
  const imagePath = path.join(req.file.filename);
  res.json({ imagePath: imagePath });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
