const emplacementRessourceController = require("../controllers/crud/emplacementRessourceController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEmplacementRessource', emplacementRessourceController.getAllEmplacementRessource);
router.get('/getAllEmplacementRessourceColumn', emplacementRessourceController.getAllEmplacementRessourceColumn);

//POST

//DELETE

//PATCH

module.exports = router;