const itemController = require("../controllers/crud/itemController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllItem', itemController.getAllItem);
router.get('/getAllItemColumn', itemController.getAllItemColumn);
router.get('/getItemById/:id_item', itemController.getItemById)

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

/**
 * @swagger
 * /api/item/addItem:
 *   post:
 *     summary: Add a new item record
 *     tags: [Item]
 *     parameters:
 *       - in: body
 *         name: item
 *         description: Item data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_item
 *             - stock_item
 *             - prix_item
 *             - image_item
 *             - description_item
 *             - id_personne
 *             - id_calendrier
 *           properties:
 *             nom_item:
 *               type: string
 *               example: "Laptop"
 *             stock_item:
 *               type: integer
 *               example: 10
 *             prix_item:
 *               type: integer
 *               example: 50000
 *             image_item:
 *               type: string
 *               example: "laptop.jpg"
 *             description_item:
 *               type: string
 *               example: "Powerful laptop with high-performance specifications."
 *             id_personne:
 *               type: integer
 *               example: 1
 *             id_calendrier:
 *               type: integer
 *               example: 1
 *     responses:
 *       '201':
 *         description: Item record created successfully
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
 * /api/item/deleteItem:
 *   delete:
 *     summary: Delete an item record
 *     tags: [Item]
 *     parameters:
 *       - in: query
 *         name: id_item
 *         description: ID of the item record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id_personne
 *         description: ID of the person associated with the item
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id_calendrier
 *         description: ID of the calendrier associated with the item
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the item record
 *       '404':
 *         description: Item record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/item/updateItem:
 *   patch:
 *     summary: Update an item record
 *     tags: [Item]
 *     parameters:
 *       - in: body
 *         name: item
 *         description: Item data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_item
 *             - nom_item
 *             - stock_item
 *             - prix_item
 *             - image_item
 *             - description_item
 *             - id_personne
 *             - id_calendrier
 *           properties:
 *             id_item:
 *               type: integer
 *               example: 1
 *             nom_item:
 *               type: string
 *               example: "Updated Laptop"
 *             stock_item:
 *               type: integer
 *               example: 15
 *             prix_item:
 *               type: integer
 *               example: 55000
 *             image_item:
 *               type: string
 *               example: "updated_laptop.jpg"
 *             description_item:
 *               type: string
 *               example: "Updated version with additional features."
 *             id_personne:
 *               type: integer
 *               example: 2
 *             id_calendrier:
 *               type: integer
 *               example: 2
 *     responses:
 *       '200':
 *         description: Item record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Item record not found
 *       '500':
 *         description: Internal server error
 */