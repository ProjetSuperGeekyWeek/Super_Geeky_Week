const standController = require("../controllers/crud/standController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllStand', standController.getAllStand);
router.get('/getAllStandColumn', standController.getAllStandColumn);

//POST

//DELETE

//PATCH

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Stand
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/stand/getAllStand:
 *   get:
 *     summary: Get all Stands
 *     tags: [Stand]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Stands
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
 * /api/stand/getAllStandColumn:
 *   get:
 *     summary: Get columns for Stands
 *     tags: [Stand]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Stand columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */