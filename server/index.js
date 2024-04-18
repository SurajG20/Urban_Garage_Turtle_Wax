const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const cors = require("cors");
// Routes 
const AdminRoute = require("./routes/Admin.js");
const ProductRoute = require("./routes/Product.js");
const BuyCarRoute = require("./routes/Buy.js");
const SellCarRoute = require("./routes/Sell.js");
const ContactRoute = require("./routes/Contact.js");

dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// Routes
app.use("/admin", AdminRoute);

// Product routes GET (/products) to list products.||POST /products to add a new product.
app.use("/products", ProductRoute);

// buy car and sell car routes GET (/buyCar-users) to list all users who want to buy a car.;
app.use("/buyCar-users", BuyCarRoute);

app.use("/sellCar-users", SellCarRoute);
// get for contact form users and post for adding new users
app.use("/contact", ContactRoute);

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
