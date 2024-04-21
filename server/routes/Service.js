const express = require("express");
const router = express.Router();
const {
  allServiceUsers,
  addServiceUser,
} = require("../controllers/Service.js");

router.get("/", allServiceUsers);
router.post("/", addServiceUser);

module.exports = router;
