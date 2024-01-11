const personneTagController = require("../controllers/crud/personneTagController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllPersonneTag', personneTagController.getAllPersonneTag);
router.get('/getAllPersonneTagColumn', personneTagController.getAllPersonneTagColumn);

//POST

//DELETE

//PATCH

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Personne_Tag
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/personneTag/getAllPersonneTag:
 *   get:
 *     summary: Get all personneTag
 *     tags: [Personne_Tag]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all personneTag
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
 * /api/personneTag/getAllPersonneTagColumn:
 *   get:
 *     summary: Get columns for personneTag
 *     tags: [Personne_Tag]
 *     responses:
 *       '200':
 *         description: Successfully retrieved personneTag columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */