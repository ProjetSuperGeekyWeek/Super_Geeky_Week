const prestataireController = require('../controllers/prestataireController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/', prestataireController.getAllPrestataires);


module.exports = router;