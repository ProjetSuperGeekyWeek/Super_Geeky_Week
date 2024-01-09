const livredorController = require('../controllers/livredorController');
const express = require('express');

var router = express.Router();

// get
router.get('/', livredorController.getTemoignage);

module.exports = router;