const commandeController = require('../controllers/commandeController');
const express = require('express');

var router = express.Router();


// get
router.get('/:uuid_commande', commandeController.getCommande);
router.get('/:id_personne/:uuid_commande', commandeController.getCommandePresta);

// put
router.put('/valider/:id_acheter', commandeController.validerLigneCommande);

module.exports = router;
