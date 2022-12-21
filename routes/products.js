const express = require("express");

const productController = require("../controllers/product.controller");

//Product routes

const router = express.Router();

router.get("/", productController.getAllProducts);

router.post("/", productController.createProduct);

router.get("/:id", productController.getSingleProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

router.get("/category?", productController.searchByCat);

module.exports = router;
