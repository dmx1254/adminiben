const router = require("express").Router();
const chfController = require("../controllers/chf.controller");

router.post("/", chfController.createChf);
router.get("/", chfController.getAllChf);
router.get("/:id", chfController.getSingleChf);
router.put("/:id", chfController.updateChf);
router.delete("/:id", chfController.deleteChf);

module.exports = router;

