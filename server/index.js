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
