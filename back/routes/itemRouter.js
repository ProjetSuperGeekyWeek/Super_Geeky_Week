const itemController = require("../controllers/crud/itemController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllItem', itemController.getAllItem);
router.get('/getAllItemColumn', itemController.getAllItemColumn);

//POST
router.post('/addItem', itemController.addNewItem);

//DELETE
router.delete('/deleteItem', itemController.deleteItemById);

//PATCH
router.patch('/updateItem', itemController.updateItem);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Item
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/item/getAllItem:
 *   get:
 *     summary: Get all items
 *     tags: [Item]
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

/**
 * @swagger
 * /api/item/getAllItemColumn:
 *   get:
 *     summary: Get columns for items
 *     tags: [Item]
 *     responses:
 *       '200':
 *         description: Successfully retrieved item columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */