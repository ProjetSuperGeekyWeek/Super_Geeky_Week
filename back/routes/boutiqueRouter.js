const boutiqueController = require('../controllers/boutiqueController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/getAllItems', boutiqueController.getAllItems);


module.exports = router;