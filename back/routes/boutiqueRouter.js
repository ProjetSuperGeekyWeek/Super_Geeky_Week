const boutiqueController = require('../controllers/boutiqueController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/getAllItems', boutiqueController.getAllItems);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Boutique
 *   description: API endpoints for boutique operations
 */

/**
 * @swagger
 * /api/boutique/getAllItems:
 *   get:
 *     summary: Get all items in the boutique
 *     tags: [Boutique]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */