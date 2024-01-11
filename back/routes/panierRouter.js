const panierController = require("../controllers/crud/panierController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPanier', panierController.getAllPanier);
router.get('/getAllPanierColumn', panierController.getAllPanierColumn);

//POST
router.post('/addPanier', panierController.addNewPanier);

//DELETE
router.delete('/deletePanier', panierController.deletePanierById);

//PATCH
router.patch('/updatePanier', panierController.updatePanier);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Panier
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/panier/getAllPanier:
 *   get:
 *     summary: Get all panier
 *     tags: [Panier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all panier
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
 * /api/panier/getAllPanierColumn:
 *   get:
 *     summary: Get columns for panier
 *     tags: [Panier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved panier columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */
