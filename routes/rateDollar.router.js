const router = require("express").Router();
const dollarController = require("../controllers/dollar.controller");

router.post("/", dollarController.createDollar);
router.get("/", dollarController.getAllDollar);
router.get("/:id", dollarController.getSingleDollar);
router.put("/:id", dollarController.updateDollar);
router.delete("/:id", dollarController.deleteDollar);

module.exports = router;
