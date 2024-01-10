const personneTagController = require("../controllers/crud/personneTagController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPersonneTag', personneTagController.getAllPersonneTag);
router.get('/getAllPersonneTagColumn', personneTagController.getAllPersonneTagColumn);

//POST

//DELETE

//PATCH

module.exports = router;