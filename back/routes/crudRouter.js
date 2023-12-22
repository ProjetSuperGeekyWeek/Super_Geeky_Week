const roleController = require("../controllers/roleController")
const acheterController = require("../controllers/acheterController")
const calendrierController = require("../controllers/calendrierController")
const creneauController = require("../controllers/creneauController")
const emplacementController = require("../controllers/emplacementController")
const emplacementRessourceController = require("../controllers/emplacementRessourceController")
const evenementController = require("../controllers/evenementController")
const itemController = require("../controllers/itemController")
const lignePanierController = require("../controllers/lignePanierController")
const panierController = require("../controllers/panierController")
const personneController = require("../controllers/personneController")
const personneTagController = require("../controllers/personneTagController")
const qrCodeController = require("../controllers/qrCodeController")
const ressourceController = require("../controllers/ressourceController")
const standController = require("../controllers/standController")
const tagController = require("../controllers/tagController")
const express = require('express');
const router = express.Router();

// GET
router.get('/getAllRole', roleController.getAllRole);

router.get('/getAllAcheter', acheterController.getAllAcheter);
router.get('/getAllAcheterColumn', acheterController.getAllAcheterColumn);

router.get('/getAllCalendrier', calendrierController.getAllCalendrier);
router.get('/getAllCalendrierColumn', calendrierController.getAllCalendrierColumn);

router.get('/getAllCreneau', creneauController.getAllCreneau);

router.get('/getAllEmplacement', emplacementController.getAllEmplacement);

router.get('/getAllEmplacementRessource', emplacementRessourceController.getAllEmplacementRessource);

router.get('/getAllEvenement', evenementController.getAllEvenement);

router.get('/getAllItem', itemController.getAllItem);

router.get('/getAllLignePanier', lignePanierController.getAllLignePanier);

router.get('/getAllPanier', panierController.getAllPanier);

router.get('/getAllPersonne', personneController.getAllPersonne);

router.get('/getAllPersonneTag', personneTagController.getAllPersonneTag);

router.get('/getAllQrCode', qrCodeController.getAllQrCode);

router.get('/getAllRessource', ressourceController.getAllRessource);

router.get('/getAllStand', standController.getAllStand);

router.get('/getAllTag', tagController.getAllTag);

// ADD

// DELETE

// UPDATE

module.exports = router;