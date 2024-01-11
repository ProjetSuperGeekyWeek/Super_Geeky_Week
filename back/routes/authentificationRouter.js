const authentificationController = require('../controllers/authentificationController');
const express = require('express');

var router = express.Router();

// get
router.get('/admin/:id', authentificationController.adminVerif);
router.get('/:mail/:mdp', authentificationController.getPrestataireMailPassword);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Authentification
 *   description: API endpoints for authentication operations
 */

/**
 * @swagger
 * /api/authentification/admin/{id}:
 *   get:
 *     summary: Verify admin by ID
 *     tags: [Authentification]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the admin to be verified
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Successfully verified admin
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/authentification/{mail}/{mdp}:
 *   get:
 *     summary: Get prestataire by email and password
 *     tags: [Authentification]
 *     parameters:
 *       - in: path
 *         name: mail
 *         description: Email of the prestataire
 *         required: true
 *         type: string
 *       - in: path
 *         name: mdp
 *         description: Password of the prestataire
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved prestataire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '404':
 *         description: Prestataire not found
 *       '500':
 *         description: Internal server error
 */