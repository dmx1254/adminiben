const router = require("express").Router();
const madController = require("../controllers/mad.controller");

router.post("/", madController.createMad);
router.get("/", madController.getAllMad);
router.get("/:id", madController.getSingleMad);
router.put("/:id", madController.updateMad);
router.delete("/:id", madController.deleteMad);

module.exports = router;
