const personneController = require("../controllers/crud/personneController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPersonne', personneController.getAllPersonne);
router.get('/getAllPersonneColumn', personneController.getAllPersonneColumn);

//POST
router.post('/addPersonne', personneController.addNewPersonne);

//DELETE
router.delete('/deletePersonne', personneController.deletePersonneById);

//PATCH
router.patch('/updatePersonne', personneController.updatePersonne);

module.exports = router;