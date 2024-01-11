const ressourceController = require("../controllers/crud/ressourceController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllRessource', ressourceController.getAllRessource);
router.get('/getAllRessourceColumn', ressourceController.getAllRessourceColumn);

//POST
router.post('/addRessource', ressourceController.addNewRessource);

//DELETE
router.delete('/deleteRessource', ressourceController.deleteRessourceById);

//PATCH
router.patch('/updateRessource', ressourceController.updateRessource);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Ressource
 *   description: API endpoints for crud operations
 */


/**
 * @swagger
 * /api/ressource/getAllRessource:
 *   get:
 *     summary: Get all Ressources
 *     tags: [Ressource]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Ressources
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
 * /api/ressource/getAllRessourceColumn:
 *   get:
 *     summary: Get columns for Ressources
 *     tags: [Ressource]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Ressource columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */