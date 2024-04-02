const livredorController = require('../controllers/livredorController');
const express = require('express');

var router = express.Router();

// get
router.get('/', livredorController.getAllTemoignage);

router.get('/:id', livredorController.getTemoignageByIdPresta);

// post
router.post('/:id_presta/:pseudo/:temoignage', livredorController.postTemoignage)


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Livre d'or
 *   description: API endpoints for livre d'or operations
 */

/**
 * @swagger
 * /api/livredor:
 *   get:
 *     summary: Get all testimonies
 *     tags: [Livre d'or]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all testimonies
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
 * /api/livredor/{id}:
 *   get:
 *     summary: Get a testimony by ID
 *     tags: [Livre d'or]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the testimony to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved the testimony
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/livredor/{id_presta}/{pseudo}/{temoignage}:
 *   post:
 *     summary: Post a new testimony
 *     tags: [Livre d'or]
 *     parameters:
 *       - in: path
 *         name: id_presta
 *         description: ID of the prestataire
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: pseudo
 *         description: Pseudo of the person posting the testimony
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: temoignage
 *         description: Content of the testimony
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Testimony posted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '500':
 *         description: Internal server error
 */