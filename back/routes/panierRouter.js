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

/**
 * @swagger
 * /api/panier/addPanier:
 *   post:
 *     summary: Add a new panier record
 *     tags: [Panier]
 *     parameters:
 *       - in: body
 *         name: panier
 *         description: Panier data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_panier
 *           properties:
 *             nom_panier:
 *               type: string
 *               example: "Panier A"
 *     responses:
 *       '201':
 *         description: Panier record created successfully
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
 * /api/panier/deletePanier:
 *   delete:
 *     summary: Delete a panier record by ID
 *     tags: [Panier]
 *     parameters:
 *       - in: query
 *         name: id_panier
 *         description: ID of the panier record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the panier record
 *       '404':
 *         description: Panier record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/panier/updatePanier:
 *   patch:
 *     summary: Update a panier record
 *     tags: [Panier]
 *     parameters:
 *       - in: body
 *         name: panier
 *         description: Panier data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_panier
 *             - nom_panier
 *           properties:
 *             id_panier:
 *               type: integer
 *               example: 1
 *             nom_panier:
 *               type: string
 *               example: "Panier B"
 *     responses:
 *       '200':
 *         description: Panier record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Panier record not found
 *       '500':
 *         description: Internal server error
 */