const carteController = require('../controllers/carteController');
const express = require('express');

var router = express.Router();


// affichage 
router.get('/InfoBulle/:id', carteController.getInfobulle);
router.get('/InfoPanel/:id', carteController.getInfoPanel);
router.get('/InfoPanelNoTake/:id', carteController.getInfoPanelNoTake);
router.get('/AllStandsTaken', carteController.getAllStandsTaken);

// création
router.post('/Stand/:id', carteController.saveStand);
// query -> id_prestataire

// modification
router.put('/Stand/:id', carteController.updateStand);
// query -> id_prestataire

// suppression
router.delete('/Stand/:id', carteController.deleteStand);

module.exports = router;