const evenementController = require("../controllers/crud/evenementController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEvenement', evenementController.getAllEvenement);
router.get('/getAllEvenementColumn', evenementController.getAllEvenementColumn);

//POST
router.post('/addEvenement', evenementController.addNewEvenement);

//DELETE
router.delete('/deleteEvenement', evenementController.deleteEvenementById);

//PATCH
router.patch('/updateEvenement', evenementController.updateEvenement);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Evenement
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/evenement/getAllEvenement:
 *   get:
 *     summary: Get all events
 *     tags: [Evenement]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all events
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
 * /api/evenement/getAllEvenementColumn:
 *   get:
 *     summary: Get columns for events
 *     tags: [Evenement]
 *     responses:
 *       '200':
 *         description: Successfully retrieved event columns
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
 * /api/evenement/addEvenement:
 *   post:
 *     summary: Add a new evenement record
 *     tags: [Evenement]
 *     parameters:
 *       - in: body
 *         name: evenement
 *         description: Evenement data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_evenement
 *             - description_evenement
 *             - nb_place
 *             - image_evenement
 *             - id_personne
 *             - id_emplacement
 *           properties:
 *             nom_evenement:
 *               type: string
 *               example: "Tech Expo"
 *             description_evenement:
 *               type: string
 *               example: "An expo showcasing the latest in technology."
 *             nb_place:
 *               type: integer
 *               example: 1000
 *             image_evenement:
 *               type: string
 *               example: "tech_expo.jpg"
 *             id_personne:
 *               type: integer
 *               example: 1
 *             id_emplacement:
 *               type: integer
 *               example: 1
 *     responses:
 *       '201':
 *         description: Evenement record created successfully
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
 * /api/evenement/deleteEvenement:
 *   delete:
 *     summary: Delete an evenement record by ID
 *     tags: [Evenement]
 *     parameters:
 *       - in: query
 *         name: id_evenement
 *         description: ID of the evenement record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the evenement record
 *       '404':
 *         description: Evenement record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/evenement/updateEvenement:
 *   patch:
 *     summary: Update an evenement record
 *     tags: [Evenement]
 *     parameters:
 *       - in: body
 *         name: evenement
 *         description: Evenement data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_evenement
 *             - nom_evenement
 *             - description_evenement
 *             - nb_place
 *             - image_evenement
 *             - id_personne
 *             - id_emplacement
 *           properties:
 *             id_evenement:
 *               type: integer
 *               example: 1
 *             nom_evenement:
 *               type: string
 *               example: "Updated Tech Expo"
 *             description_evenement:
 *               type: string
 *               example: "An updated expo showcasing the latest in technology."
 *             nb_place:
 *               type: integer
 *               example: 1200
 *             image_evenement:
 *               type: string
 *               example: "updated_tech_expo.jpg"
 *             id_personne:
 *               type: integer
 *               example: 2
 *             id_emplacement:
 *               type: integer
 *               example: 2
 *     responses:
 *       '200':
 *         description: Evenement record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Evenement record not found
 *       '500':
 *         description: Internal server error
 */