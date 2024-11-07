// routes/userRoutes.js
const express = require("express");
const { testController } = require("../controllers/userController");
const { saveUser } = require("../controllers/userController");
const router = express.Router();

// Test route
router.get("/test", testController); // Calls the testController function

router.post("/save", saveUser);

module.exports = router;
