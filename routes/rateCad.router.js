const router = require("express").Router();
const cadController = require("../controllers/cad.controller");

router.post("/", cadController.createCad);
router.get("/", cadController.getAllCad);
router.get("/:id", cadController.getSingleCad);
router.put("/:id", cadController.updateCad);
router.delete("/:id", cadController.deleteCad);

module.exports = router;
