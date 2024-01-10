const ressourceController = require("../controllers/crud/ressourceController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllRessource', ressourceController.getAllRessource);
router.get('/getAllRessourceColumn', ressourceController.getAllRessourceColumn);

//POST
router.post('/addRessource', ressourceController.addNewRessource);

//DELETE
router.delete('/deleteRessource', ressourceController.deleteRessourceById);

//PATCH
router.patch('/updateRessource', ressourceController.updateRessource);

module.exports = router;