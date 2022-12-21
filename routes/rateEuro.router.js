const router = require("express").Router();
const euroController = require("../controllers/euro.controller");

router.post("/", euroController.createEuro);
router.get("/", euroController.getAllEuro);
router.get("/:id", euroController.getSingleEuro);
router.put("/:id", euroController.updateEuro);
router.delete("/:id", euroController.deleteEuro);

router.get("/test/ip", euroController.testIp);

module.exports = router;
