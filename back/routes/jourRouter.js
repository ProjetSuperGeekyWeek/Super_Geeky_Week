const express = require('express');
const router = express.Router();
const jourController = require("../controllers/jourController");

//GET
router.get('/getAllJour', jourController.getAllJour);
router.get('/getAllJourColumn', jourController.getAllJourColumn);

//POST

//DELETE

//PATCH

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Jour
 *   description: API endpoints for jour operations
 */

/**
 * @swagger
 * /api/jour/getAllJour:
 *   get:
 *     summary: Get all jour records
 *     tags: [Jour]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all jour records
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
 * /api/jour/getAllJourColumn:
 *   get:
 *     summary: Get columns for jour records
 *     tags: [Jour]
 *     responses:
 *       '200':
 *         description: Successfully retrieved jour record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */