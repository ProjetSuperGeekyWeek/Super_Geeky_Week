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