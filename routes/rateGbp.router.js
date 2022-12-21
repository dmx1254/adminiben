const router = require("express").Router();
const gbpController = require("../controllers/gbp.controller");

router.post("/", gbpController.createGbp);
router.get("/", gbpController.getAllGbp);
router.get("/:id", gbpController.getSingleGbp);
router.put("/:id", gbpController.updateGbp);
router.delete("/:id", gbpController.deleteGbp);

module.exports = router;
