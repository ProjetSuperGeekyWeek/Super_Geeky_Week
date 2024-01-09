const prestataireController = require('../controllers/prestataireController');
const express = require('express');

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Prestataire
 *   description: API endpoints for prestataire operations
 */

/**
 * @swagger
 * /api/prestataire/:
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
 *         required: true
 *         description: ID of the prestataire to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved prestataire
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
 *         required: true
 *         description: Name of the prestataire to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved prestataire by name
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/prestataire/tag/{tag}:
 *   get:
 *     summary: Get prestataires by tag
 *     tags: [Prestataire]
 *     parameters:
 *       - in: path
 *         name: tag
 *         required: true
 *         description: Tag of the prestataires to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved prestataires by tag
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/prestataire/{id}/tags:
 *   get:
 *     summary: Get tags of a prestataire by ID
 *     tags: [Prestataire]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the prestataire to retrieve tags
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved tags of the prestataire
 *       '500':
 *         description: Internal server error
 */

// affichage
router.get('/', prestataireController.getAllPrestataires);
router.get('/:id', prestataireController.getPrestataireById);
router.get('/nom/:nom', prestataireController.getPrestataireByNom);
router.get('/tag/:tag', prestataireController.getPrestataireByTag);
router.get('/:id/tags', prestataireController.getPrestataireTags);


module.exports = router;