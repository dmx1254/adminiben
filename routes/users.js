const express = require("express");
const userController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");

const router = express.Router();

//Users routes
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.get("/stats", userController.getStats);
router.get("/:mail", userController.getMail);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
