const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/user/login", userController.login);
router.post("/user/signup", userController.createUser);

module.exports = router;