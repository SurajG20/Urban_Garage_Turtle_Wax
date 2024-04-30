const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
require("dotenv").config();
const dotenv = require("dotenv");

const cors = require("cors");
// Routes
const AdminRoute = require("./routes/Admin.js");
const ProductRoute = require("./routes/Product.js");
const CarRoute = require("./routes/Car.js");
const ProductCustomerRoute = require("./routes/ProductCustomer.js");
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
app.post("/update-password", async (req, res) => {
  const { username, password, newpassword } = req.body;
  res.json({ message: "Password updated successfully" });
    try {
      // Find the admin by username and current password
      const admin = await Admin.findOne({ username, password });
      if (!admin) {
        return res
          .status(404)
          .json({ message: "Incorrect current password or username" });
      }

      // Directly update the password in the database (not recommended)
      admin.password = newpassword;
      await admin.save();

      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password: ", error);
      res.status(500).json({ error: "Internal server error" });
    }
});

app.use("/admin", AdminRoute);


app.use("/car", CarRoute);

app.use("/buyCar-users", BuyCarRoute);

app.use("/sellCar-users", SellCarRoute);

app.use("/service", ServiceRoute);

app.use("/product", ProductRoute);

app.use("/product-customer", ProductCustomerRoute);

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
