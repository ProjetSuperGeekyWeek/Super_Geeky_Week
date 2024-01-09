const inscriptionController = require('../controllers/inscriptionController');
const express = require('express');

const router = express.Router();

//get
router.get('/:id', inscriptionController.getAllInscriptionsIdPresta);

router.get('/:id/horaires', inscriptionController.getAllHorairesIdInscription);

//post
router.post('/:id', inscriptionController.postInscrit);

//delete
router.delete('/:id/:nom/:prenom/:id_calendrier', inscriptionController.deleteInscrit);

module.exports = router;