const standController = require("../controllers/crud/standController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllStand', standController.getAllStand);
router.get('/getAllStandColumn', standController.getAllStandColumn);

//POST

//DELETE

//PATCH

module.exports = router;