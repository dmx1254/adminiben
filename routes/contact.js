const express = require("express");

const contactController = require("../controllers/contact.controller");


//Contact routes

const router = express.Router();

router.post("/", contactController.createMessage);

router.get("/", contactController.getAllMessages);

router.get("/:userIdMessage", contactController.getUserMessage);

router.delete("/:id", contactController.deleteMessage);

module.exports = router;
