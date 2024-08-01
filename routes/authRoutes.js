const express = require("express");
const { signupController, loginController, currentUserController } = require("../controllers/authController");
const auth = require("../middlewares/authMW");
const router = express.Router();

router.post("/signup",signupController);

router.post("/login",loginController);

router.get("/user",auth,currentUserController);

module.exports = router;