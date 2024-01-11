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