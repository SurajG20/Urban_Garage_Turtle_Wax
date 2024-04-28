const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
const dotenv = require("dotenv");

const cors = require("cors");
// Routes
const AdminRoute = require("./routes/Admin.js");
const ProductRoute = require("./routes/Product.js");
const CarRoute = require("./routes/Car.js");

const BuyCarRoute = require("./routes/Buy.js");
const SellCarRoute = require("./routes/Sell.js");
const ContactRoute = require("./routes/Contact.js");
const ServiceRoute = require("./routes/Service.js");

dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// Routes
app.use("/admin", AdminRoute);

// Product routes GET (/products) to list products.||POST /products to add a new product.
app.use("/car", ProductRoute);

// Product routes GET (/products) to list products.||POST /products to add a new product.
app.use("/product", ProductRoute);

// Product routes GET (/car) to list cars.||POST cars to add a new product.
app.use("/car", CarRoute);

// buy car and sell car routes GET (/buyCar-users) to list all users who want to buy a car.;
app.use("/buyCar-users", BuyCarRoute);

app.use("/sellCar-users", SellCarRoute);

// get for contact form users and post for adding new users
app.use("/service", ServiceRoute);

// get for contact form users and post for adding new users
app.use("/contact", ContactRoute);

// In your main app file (app.js or similar)
app.get("/", (req, res) => {
  res.status(200).send("Welcome To Urban Garage!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
