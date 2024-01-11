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