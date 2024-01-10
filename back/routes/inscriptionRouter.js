const inscriptionController = require('../controllers/inscriptionController');
const express = require('express');

const router = express.Router();

//get
router.get('/jours', inscriptionController.getJours);

router.get('/:id', inscriptionController.getAllInscriptionsIdPresta);

router.get('/:id/horaires', inscriptionController.getAllHorairesIdInscription);

router.get('/:id/inscrits', inscriptionController.getAllInscritsIdInscription);

//post
router.post('/:id', inscriptionController.postInscrit);

router.post('/:id/:id_jour/:heure_debut/:heure_fin', inscriptionController.postHoraire);

//put
router.put('/:id/:titre/:description/:nb_place', inscriptionController.putInscription);

//delete
router.delete('/:id/:nom/:prenom/:id_calendrier', inscriptionController.deleteInscrit);

router.delete('/:id/:id_calendrier', inscriptionController.deleteHoraire);

module.exports = router;