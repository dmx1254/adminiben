const express = require("express");
const serverController = require("../controllers/server.controller");

const router = express.Router();

//Server routes
router.post("/", serverController.createServer);
router.get("/category/?", serverController.getServers);
router.get("/", serverController.getAllServers);
router.put("/:id", serverController.updateServer);

router.get("/:id", serverController.getServer);
router.delete("/:id", serverController.deleteServer);

module.exports = router;
