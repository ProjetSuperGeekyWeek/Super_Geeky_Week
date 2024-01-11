const tagController = require("../controllers/crud/tagController");
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllTag', tagController.getAllTag);
router.get('/getAllTagColumn', tagController.getAllTagColumn);

//POST
router.post('/addTag', tagController.addNewTag);

//DELETE
router.delete('/deleteTag', tagController.deleteTagById);

//PATCH
router.patch('/updateTag', tagController.updateTag);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Tag
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/tag/getAllTag:
 *   get:
 *     summary: Get all Tags
 *     tags: [Tag]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Tags
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
 * /api/tag/getAllTagColumn:
 *   get:
 *     summary: Get columns for Tags
 *     tags: [Tag]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Tag columns
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
 * /api/tag/addTag:
 *   post:
 *     summary: Add a new tag record
 *     tags: [Tag]
 *     parameters:
 *       - in: body
 *         name: tag
 *         description: Tag data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_tag
 *           properties:
 *             nom_tag:
 *               type: string
 *               example: "Technology"
 *     responses:
 *       '201':
 *         description: Tag record created successfully
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
 * /api/tag/deleteTag:
 *   delete:
 *     summary: Delete a tag record by ID
 *     tags: [Tag]
 *     parameters:
 *       - in: query
 *         name: id_tag
 *         description: ID of the tag record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the tag record
 *       '404':
 *         description: Tag record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/tag/updateTag:
 *   patch:
 *     summary: Update a tag record
 *     tags: [Tag]
 *     parameters:
 *       - in: body
 *         name: tag
 *         description: Tag data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_tag
 *             - nom_tag
 *           properties:
 *             id_tag:
 *               type: integer
 *               example: 1
 *             nom_tag:
 *               type: string
 *               example: "UpdatedTechnology"
 *     responses:
 *       '200':
 *         description: Tag record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Tag record not found
 *       '500':
 *         description: Internal server error
 */