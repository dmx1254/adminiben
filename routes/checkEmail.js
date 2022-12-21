const express = require('express');

const checkEmailController = require('../controllers/checkEmail.controller');

//Check e-mail routes

const router = express.Router();

router.post('/', checkEmailController.sendCode);



module.exports = router;