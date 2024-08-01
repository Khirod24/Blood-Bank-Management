const express = require("express");
const auth = require("../middlewares/authMW");

const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", auth, bloodGroupDetailsContoller);

module.exports = router;