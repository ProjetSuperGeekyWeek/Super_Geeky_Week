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

/**
 * @swagger
 * tags:
 *   name: Crud
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/crud/getAllRole:
 *   get:
 *     summary: Get all roles
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_role:
 *                     type: integer
 *                   nom_role:
 *                     type: string
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllRoleColumn:
 *   get:
 *     summary: Get columns for the roles
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved role columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllAcheter:
 *   get:
 *     summary: Get all acheter records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all acheter records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllAcheterColumn:
 *   get:
 *     summary: Get columns for acheter records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved acheter record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllCalendrier:
 *   get:
 *     summary: Get all calendrier records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all calendrier records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllCalendrierColumn:
 *   get:
 *     summary: Get columns for calendrier records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved calendrier record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllCreneau:
 *   get:
 *     summary: Get all creneau records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all creneau records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllCreneauColumn:
 *   get:
 *     summary: Get columns for creneau records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved creneau record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEmplacement:
 *   get:
 *     summary: Get all emplacement records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all emplacement records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEmplacementColumn:
 *   get:
 *     summary: Get columns for emplacement records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved emplacement record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEmplacementRessource:
 *   get:
 *     summary: Get all emplacement ressource records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all emplacement ressource records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEmplacementRessourceColumn:
 *   get:
 *     summary: Get columns for emplacement ressource records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved emplacement ressource record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEvenement:
 *   get:
 *     summary: Get all events
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   [Define event properties here]
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/getAllEvenementColumn:
 *   get:
 *     summary: Get columns for events
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved event columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   [Define event column properties here]
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/crud/addRole:
 *   patch:
 *     summary: Add a new role
 *     tags: [Crud]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom_role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully added a new role
 *       '500':
 *         description: Internal server error
 */

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
router.patch('/addAcheter', acheterController.addNewAcheter);
router.patch('/addItem', itemController.addNewItem);
router.patch('/addPersonne', personneController.addNewPersonne);
router.patch('/addRessource', ressourceController.addNewRessource);
router.patch('/addQrCode', qrCodeController.addNewQrCode);
router.patch('/addPanier', panierController.addNewPanier);
router.patch('/addTag', tagController.addNewTag);
router.patch('/addEmplacement', emplacementController.addNewEmplacement);
router.patch('/addCalendrier', calendrierController.addNewCalendrier);
router.patch('/addEvenement', evenementController.addNewEvenement);
// DELETE

// UPDATE

module.exports = router;