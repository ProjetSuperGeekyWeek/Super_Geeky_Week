const creneauController = require("../controllers/crud/creneauController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllCreneau', creneauController.getAllCreneau);
router.get('/getAllCreneauColumn', creneauController.getAllCreneauColumn);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Creneau
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/creneau/getAllCreneau:
 *   get:
 *     summary: Get all creneau records
 *     tags: [Creneau]
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
 * /api/creneau/getAllCreneauColumn:
 *   get:
 *     summary: Get columns for creneau records
 *     tags: [Creneau]
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
