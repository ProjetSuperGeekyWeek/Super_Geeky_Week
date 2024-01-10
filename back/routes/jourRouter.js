const express = require('express');
const router = express.Router();
const jourController = require("../controllers/jourController");

//GET
router.get('/getAllJour', jourController.getAllJour);
router.get('/getAllJourColumn', jourController.getAllJourColumn);

//POST

//DELETE

//PATCH

module.exports = router;