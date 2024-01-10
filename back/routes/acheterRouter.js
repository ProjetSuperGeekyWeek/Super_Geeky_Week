const express = require('express');
const router = express.Router();
const acheterController = require("../controllers/crud/acheterController")

//GET
router.get('/getAllAcheter', acheterController.getAllAcheter);
router.get('/getAllAcheterColumn', acheterController.getAllAcheterColumn);

//POST
router.post('/addAcheter', acheterController.addNewAcheter);

//DELETE
router.delete('/deleteAcheter', acheterController.deleteAcheterById);

//PATCH
router.patch('/updateAcheter', acheterController.updateAcheter);

module.exports = router;
