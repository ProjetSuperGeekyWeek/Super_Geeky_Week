const emplacementController = require("../controllers/crud/emplacementController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllEmplacement', emplacementController.getAllEmplacement);
router.get('/getAllEmplacementColumn', emplacementController.getAllEmplacementColumn);

//POST
router.post('/addEmplacement', emplacementController.addNewEmplacement);

//DELETE
router.delete('/deleteEmplacement', emplacementController.deleteEmplacementById);

//PATCH
router.patch('/updateEmplacement', emplacementController.updateEmplacement);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Emplacement
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/emplacement/getAllEmplacement:
 *   get:
 *     summary: Get all emplacement records
 *     tags: [Emplacement]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all emplacement records
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
 * /api/emplacement/getAllEmplacementColumn:
 *   get:
 *     summary: Get columns for emplacement records
 *     tags: [Emplacement]
 *     responses:
 *       '200':
 *         description: Successfully retrieved emplacement record columns
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
 * /api/emplacement/addEmplacement:
 *   post:
 *     summary: Add a new emplacement record
 *     tags: [Emplacement]
 *     parameters:
 *       - in: body
 *         name: emplacement
 *         description: Emplacement data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_emplacement
 *           properties:
 *             nom_emplacement:
 *               type: string
 *               example: "Salle A"
 *     responses:
 *       '201':
 *         description: Emplacement record created successfully
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
 * /api/emplacement/deleteEmplacement:
 *   delete:
 *     summary: Delete an emplacement record by ID
 *     tags: [Emplacement]
 *     parameters:
 *       - in: query
 *         name: id_emplacement
 *         description: ID of the emplacement record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the emplacement record
 *       '404':
 *         description: Emplacement record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/emplacement/updateEmplacement:
 *   patch:
 *     summary: Update an emplacement record
 *     tags: [Emplacement]
 *     parameters:
 *       - in: body
 *         name: emplacement
 *         description: Emplacement data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_emplacement
 *             - nom_emplacement
 *           properties:
 *             id_emplacement:
 *               type: integer
 *               example: 1
 *             nom_emplacement:
 *               type: string
 *               example: "Salle B"
 *     responses:
 *       '200':
 *         description: Emplacement record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Emplacement record not found
 *       '500':
 *         description: Internal server error
 */