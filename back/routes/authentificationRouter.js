const authentificationController = require('../controllers/authentificationController');
const express = require('express');

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentification
 *   description: API endpoints for user authentication
 */

/**
 * @swagger
 * /api/authentification/{mail}/{mdp}:
 *   get:
 *     summary: Authenticate a user by email and password
 *     tags: [Authentification]
 *     parameters:
 *       - in: path
 *         name: mail
 *         required: true
 *         description: User's email
 *         schema:
 *           type: string
 *       - in: path
 *         name: mdp
 *         required: true
 *         description: User's password
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully authenticated
 *       '401':
 *         description: Unauthorized - Invalid email or password
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/authentification/admin/{id}:
 *   get:
 *     summary: Verify if a user is an admin
 *     tags: [Authentification]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User's ID to verify as admin
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User is an admin
 *       '401':
 *         description: User is not an admin
 *       '500':
 *         description: Internal server error
 */

// get
router.get('/admin/:id', authentificationController.adminVerif);
router.get('/:mail/:mdp', authentificationController.getPrestataireMailPassword);

// put
router.put('/:id/:mdp', authentificationController.changePassword);

module.exports = router;