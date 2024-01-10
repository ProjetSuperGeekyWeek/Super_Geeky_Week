const evenementController = require("../controllers/crud/evenementController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEvenement', evenementController.getAllEvenement);
router.get('/getAllEvenementColumn', evenementController.getAllEvenementColumn);

//POST
router.post('/addEvenement', evenementController.addNewEvenement);

//DELETE
router.delete('/deleteEvenement', evenementController.deleteEvenementById);

//PATCH
router.patch('/updateEvenement', evenementController.updateEvenement);

module.exports = router;