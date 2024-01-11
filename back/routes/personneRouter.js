const personneController = require("../controllers/crud/personneController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPersonne', personneController.getAllPersonne);
router.get('/getAllPersonneColumn', personneController.getAllPersonneColumn);

//POST
router.post('/addPersonne', personneController.addNewPersonne);

//DELETE
router.delete('/deletePersonne', personneController.deletePersonneById);

//PATCH
router.patch('/updatePersonne', personneController.updatePersonne);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Personne
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/personne/getAllPersonne:
 *   get:
 *     summary: Get all personne
 *     tags: [Personne]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all personne
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
 * /api/personne/getAllPersonneColumn:
 *   get:
 *     summary: Get columns for personne
 *     tags: [Personne]
 *     responses:
 *       '200':
 *         description: Successfully retrieved personne columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */