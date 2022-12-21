const router = require("express").Router();
const rubController = require("../controllers/rub.controller");

router.post("/", rubController.createRub);
router.get("/", rubController.getAllRub);
router.get("/:id", rubController.getSingleRub);
router.put("/:id", rubController.updateRub);
router.delete("/:id", rubController.deleteRub);

module.exports = router;
