const lignePanierController = require("../controllers/crud/lignePanierController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllLignePanier', lignePanierController.getAllLignePanier);
router.get('/getAllLignePanierColumn', lignePanierController.getAllLignePanierColumn);
//POST

//DELETE

//PATCH

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Ligne_Panier
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/lignePanier/getAllLignePanier:
 *   get:
 *     summary: Get all lignePanier
 *     tags: [Ligne_Panier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all lignePanier
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
 * /api/lignePanier/getAllLignePanierColumn:
 *   get:
 *     summary: Get columns for lignePanier
 *     tags: [Ligne_Panier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved lignePanier columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */