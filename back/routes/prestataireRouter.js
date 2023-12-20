const prestataireController = require('../controllers/prestataireController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/', prestataireController.getAllPrestataires);
router.get('/:id', prestataireController.getPrestataireById);
router.get('/nom/:nom', prestataireController.getPrestataireByNom);
router.get('/tag/:tag', prestataireController.getPrestataireByTag);
router.get('/:id/tags', prestataireController.getPrestataireTags);


module.exports = router;