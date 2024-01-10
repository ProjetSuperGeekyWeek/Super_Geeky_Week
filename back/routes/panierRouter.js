const panierController = require("../controllers/crud/panierController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPanier', panierController.getAllPanier);
router.get('/getAllPanierColumn', panierController.getAllPanierColumn);

//POST
router.post('/addPanier', panierController.addNewPanier);

//DELETE
router.delete('/deletePanier', panierController.deletePanierById);

//PATCH
router.patch('/updatePanier', panierController.updatePanier);

module.exports = router;
