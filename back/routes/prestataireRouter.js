const prestataireController = require('../controllers/prestataireController');
const express = require('express');

var router = express.Router();

// affichage
router.get('/', prestataireController.getAllPrestataires);
router.get('/:id', prestataireController.getPrestataireById);
router.get('/nom/:nom', prestataireController.getPrestataireByNom);
router.get('/tag/:tag', prestataireController.getPrestataireByTag);
router.get('/:id/tags', prestataireController.getPrestataireTags);
router.post('/:id/contact', prestataireController.sendContactMessage);


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Prestataire
 *   description: API endpoints for prestataire operations
 */

/**
 * @swagger
 * /api/prestataire:
 *   get:
 *     summary: Get all prestataires
 *     tags: [Prestataire]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all prestataires
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
 * /api/prestataire/{id}:
 *   get:
 *     summary: Get a prestataire by ID
 *     tags: [Prestataire]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the prestataire to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved the prestataire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/prestataire/nom/{nom}:
 *   get:
 *     summary: Get a prestataire by name
 *     tags: [Prestataire]
 *     parameters:
 *       - in: path
 *         name: nom
 *         description: Name of the prestataire to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved the prestataire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '500':
 *         description: Internal server error
 */