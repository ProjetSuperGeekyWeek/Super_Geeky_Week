const authentificationController = require('../controllers/authentificationController');
const express = require('express');

var router = express.Router();

// get
router.get('/admin/:id', authentificationController.adminVerif);
router.get('/:mail/:mdp', authentificationController.getPrestataireMailPassword);


module.exports = router;