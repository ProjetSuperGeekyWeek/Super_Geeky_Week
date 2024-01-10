const lignePanierController = require("../controllers/crud/lignePanierController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllLignePanier', lignePanierController.getAllLignePanier);
router.get('/getAllLignePanierColumn', lignePanierController.getAllLignePanierColumn);
//POST

//DELETE

//PATCH

module.exports = router;