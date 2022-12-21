const router = require("express").Router();
const usdtController = require("../controllers/usdt.controller");

router.post("/", usdtController.createUsdt);
router.get("/", usdtController.getAllUsdt);
router.get("/:id", usdtController.getSingleUsdt);
router.put("/:id", usdtController.updateUsdt);
router.delete("/:id", usdtController.deleteUsdt);

module.exports = router;
