const express = require("express");
const orderController = require("../controllers/order.controller");

const router = express.Router();

//Orders routes

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/ordernum/:numorder", orderController.getOrderByNumOrder);
router.put("/:id", orderController.updateOrder);
router.get("/find/:userId", orderController.getUserOrder);
router.get("/income", orderController.getIncome);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
