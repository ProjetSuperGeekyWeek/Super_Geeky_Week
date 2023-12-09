const carteController = require('../controllers/carteController');
const express = require('express');

const router = express.Router();

// affichage 
router.get('/getInfoBulle/:id', carteController.getInfobulle);
router.get('/getInfoPanel/:id', carteController.getInfoPanel);

// création
router.post('/saveStand/:id', carteController.saveStand);
// query -> id_prestataire

// modification
router.put('/updateStand/:id', carteController.updateStand);
// query -> id_prestataire

// suppression
router.delete('/deleteStand/:id', carteController.deleteStand);

module.exports = router;