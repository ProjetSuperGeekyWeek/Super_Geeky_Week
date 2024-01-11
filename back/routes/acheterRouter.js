const express = require('express');
const router = express.Router();
const acheterController = require("../controllers/crud/acheterController")

//GET
router.get('/getAllAcheter', acheterController.getAllAcheter);
router.get('/getAllAcheterColumn', acheterController.getAllAcheterColumn);

//POST
router.post('/addAcheter', acheterController.addNewAcheter);

//DELETE
router.delete('/deleteAcheter', acheterController.deleteAcheterById);

//PATCH
router.patch('/updateAcheter', acheterController.updateAcheter);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Acheter
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/acheter/getAllAcheter:
 *   get:
 *     summary: Get all acheter records
 *     tags: [Acheter]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all acheter records
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
 * /api/acheter/getAllAcheterColumn:
 *   get:
 *     summary: Get columns for acheter records
 *     tags: [Acheter]
 *     responses:
 *       '200':
 *         description: Successfully retrieved acheter record columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */