const express = require("express");
const {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
} = require("../controllers/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);
router.post("/logout", logoutUser);

module.exports = router;
