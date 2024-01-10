const emplacementController = require("../controllers/crud/emplacementController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEmplacement', emplacementController.getAllEmplacement);
router.get('/getAllEmplacementColumn', emplacementController.getAllEmplacementColumn);

//POST
router.post('/addEmplacement', emplacementController.addNewEmplacement);

//DELETE
router.delete('/deleteEmplacement', emplacementController.deleteEmplacementById);

//PATCH
router.patch('/updateEmplacement', emplacementController.updateEmplacement);

module.exports = router;