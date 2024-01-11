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

/**
 * @swagger
 * /api/ressource/addRessource:
 *   post:
 *     summary: Add a new ressource record
 *     tags: [Ressource]
 *     parameters:
 *       - in: body
 *         name: ressource
 *         description: Ressource data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_ressource
 *           properties:
 *             nom_ressource:
 *               type: string
 *               example: "Projector"
 *     responses:
 *       '201':
 *         description: Ressource record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/ressource/deleteRessource:
 *   delete:
 *     summary: Delete a ressource record by ID
 *     tags: [Ressource]
 *     parameters:
 *       - in: query
 *         name: id_ressource
 *         description: ID of the ressource record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the ressource record
 *       '404':
 *         description: Ressource record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/ressource/updateRessource:
 *   patch:
 *     summary: Update a ressource record
 *     tags: [Ressource]
 *     parameters:
 *       - in: body
 *         name: ressource
 *         description: Ressource data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_ressource
 *             - nom_ressource
 *           properties:
 *             id_ressource:
 *               type: integer
 *               example: 1
 *             nom_ressource:
 *               type: string
 *               example: "Laptop"
 *     responses:
 *       '200':
 *         description: Ressource record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Ressource record not found
 *       '500':
 *         description: Internal server error
 */