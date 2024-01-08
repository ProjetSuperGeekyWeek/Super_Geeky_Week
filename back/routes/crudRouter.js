const roleController = require("../controllers/crud/roleController")
const acheterController = require("../controllers/crud/acheterController")
const calendrierController = require("../controllers/crud/calendrierController")
const creneauController = require("../controllers/crud/creneauController")
const emplacementController = require("../controllers/crud/emplacementController")
const emplacementRessourceController = require("../controllers/crud/emplacementRessourceController")
const evenementController = require("../controllers/crud/evenementController")
const itemController = require("../controllers/crud/itemController")
const lignePanierController = require("../controllers/crud/lignePanierController")
const panierController = require("../controllers/crud/panierController")
const personneController = require("../controllers/crud/personneController")
const personneTagController = require("../controllers/crud/personneTagController")
const qrCodeController = require("../controllers/crud/qrCodeController")
const ressourceController = require("../controllers/crud/ressourceController")
const standController = require("../controllers/crud/standController")
const tagController = require("../controllers/crud/tagController")
const express = require('express');
const router = express.Router();

// GET
router.get('/getAllRole', roleController.getAllRole);
router.get('/getAllRoleColumn', roleController.getAllRoleColumn);

router.get('/getAllAcheter', acheterController.getAllAcheter);
router.get('/getAllAcheterColumn', acheterController.getAllAcheterColumn);

router.get('/getAllCalendrier', calendrierController.getAllCalendrier);
router.get('/getAllCalendrierColumn', calendrierController.getAllCalendrierColumn);

router.get('/getAllCreneau', creneauController.getAllCreneau);
router.get('/getAllCreneauColumn', creneauController.getAllCreneauColumn);

router.get('/getAllEmplacement', emplacementController.getAllEmplacement);
router.get('/getAllEmplacementColumn', emplacementController.getAllEmplacementColumn);

router.get('/getAllEmplacementRessource', emplacementRessourceController.getAllEmplacementRessource);
router.get('/getAllEmplacementRessourceColumn', emplacementRessourceController.getAllEmplacementRessourceColumn);

router.get('/getAllEvenement', evenementController.getAllEvenement);
router.get('/getAllEvenementColumn', evenementController.getAllEvenementColumn);

router.get('/getAllItem', itemController.getAllItem);
router.get('/getAllItemColumn', itemController.getAllItemColumn);

router.get('/getAllLignePanier', lignePanierController.getAllLignePanier);
router.get('/getAllLignePanierColumn', lignePanierController.getAllLignePanierColumn);

router.get('/getAllPanier', panierController.getAllPanier);
router.get('/getAllPanierColumn', panierController.getAllPanierColumn);

router.get('/getAllPersonne', personneController.getAllPersonne);
router.get('/getAllPersonneColumn', personneController.getAllPersonneColumn);

router.get('/getAllPersonneTag', personneTagController.getAllPersonneTag);
router.get('/getAllPersonneTagColumn', personneTagController.getAllPersonneTagColumn);

router.get('/getAllQrCode', qrCodeController.getAllQrCode);
router.get('/getAllQrCodeColumn', qrCodeController.getAllQrCodeColumn);

router.get('/getAllRessource', ressourceController.getAllRessource);
router.get('/getAllRessourceColumn', ressourceController.getAllRessourceColumn);

router.get('/getAllStand', standController.getAllStand);
router.get('/getAllStandColumn', standController.getAllStandColumn);

router.get('/getAllTag', tagController.getAllTag);
router.get('/getAllTagColumn', tagController.getAllTagColumn);


// ADD
router.patch('/addRole', roleController.addNewRole);
// DELETE

// UPDATE

module.exports = router;