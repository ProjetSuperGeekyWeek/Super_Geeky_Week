const authentificationController = require('../controllers/authentificationController');
const express = require('express');

var router = express.Router();

// get
router.get('/:mail/:mdp', authentificationController.getPrestataireMailPassword);
router.get('/admin/:id', authentificationController.adminVerif);


module.exports = router;