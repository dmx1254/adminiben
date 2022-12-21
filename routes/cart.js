const express = require("express");
const { checkAdmin } = require("../middleware/auth.admin.middleware");
const cartController = require("../controllers/cart.controller");

const router = express.Router();

//Cart routes

router.post("/", cartController.createCart);
router.get('/', checkAdmin, cartController.getAllCart);
router.get('/find/:id', checkAdmin, cartController.getUserCart);
router.put("/:id",checkAdmin, cartController.updatedCart);
router.delete("/:id", checkAdmin, cartController.deletedCart);

module.exports = router;
