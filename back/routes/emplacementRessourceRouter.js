const emplacementRessourceController = require("../controllers/crud/emplacementRessourceController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEmplacementRessource', emplacementRessourceController.getAllEmplacementRessource);
router.get('/getAllEmplacementRessourceColumn', emplacementRessourceController.getAllEmplacementRessourceColumn);

//POST

//DELETE

//PATCH

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Emplacement_Ressource
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/emplacementRessource/getAllEmplacementRessource:
 *   get:
 *     summary: Get all emplacement ressource records
 *     tags: [Emplacement_Ressource]
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
 * /api/emplacementRessource/getAllEmplacementRessourceColumn:
 *   get:
 *     summary: Get columns for emplacement ressource records
 *     tags: [Emplacement_Ressource]
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