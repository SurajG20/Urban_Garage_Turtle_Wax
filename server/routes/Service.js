const express = require("express");
const router = express.Router();
const {
  allServiceUsers,
  addServiceUser,
  deleteServiceUser,
} = require("../controllers/Service.js");

router.get("/", allServiceUsers);
router.post("/", addServiceUser);

router.delete("/:id", deleteServiceUser);

module.exports = router;
