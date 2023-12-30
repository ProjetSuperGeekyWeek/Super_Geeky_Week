const calendrierController = require('../controllers/crud/calendrierController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/getAllCalendrier', calendrierController.getAllCalendrier);


module.exports = router;