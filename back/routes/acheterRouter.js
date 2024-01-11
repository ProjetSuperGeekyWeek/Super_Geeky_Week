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

/**
 * @swagger
 * /api/acheter/addAcheter:
 *   post:
 *     summary: Add a new acheter record
 *     tags: [Acheter]
 *     parameters:
 *       - in: body
 *         name: acheter
 *         description: Acheter data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - id_item
 *             - id_qr_code
 *             - consommer
 *           properties:
 *             id_item:
 *               type: integer
 *               example: 1
 *             id_qr_code:
 *               type: integer
 *               example: 2
 *             consommer:
 *               type: boolean
 *               example: true
 *     responses:
 *       '201':
 *         description: Acheter record created successfully
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
 * /api/acheter/deleteAcheter:
 *   delete:
 *     summary: Delete an acheter record by ID
 *     tags: [Acheter]
 *     parameters:
 *       - in: query
 *         name: id_acheter
 *         description: ID of the acheter record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the acheter record
 *       '404':
 *         description: Acheter record not found
 *       '500':
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/acheter/updateAcheter:
 *   patch:
 *     summary: Add a new acheter record
 *     tags: [Acheter]
 *     parameters:
 *       - in: body
 *         name: acheter
 *         description: Acheter data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - id_acheter
 *             - id_item
 *             - id_qr_code
 *             - consommer
 *           properties:
 *             id_acheter:
 *               type: integer
 *               example: 1
 *             id_item:
 *               type: integer
 *               example: 1
 *             id_qr_code:
 *               type: integer
 *               example: 2
 *             consommer:
 *               type: boolean
 *               example: true
 *     responses:
 *       '201':
 *         description: Acheter record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */