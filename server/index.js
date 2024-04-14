const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const cors = require("cors");
// Routes 
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const buyCarRoutes = require("./routes/buyCarRoutes");
const  sellCarRoutes = require( "./routes/sellCarRoutes");

dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// Routes
app.use("/admin", adminRoutes);
// Product routes GET (/products) to list products.||POST /products to add a new product.
app.use("/products", productRoutes);
// buyCar routes GET (/buyCar-users) to list all users who want to buy a car.;
app.use("/buyCar-users", buyCarRoutes);

app.use("/sellCar-users", sellCarRoutes);

// In your main app file (app.js or similar)
app.get("/", (req, res) => {
  console.log("Welcome To Urban Garage!");
  res.status(200).send("Welcome To Urban Garage!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
