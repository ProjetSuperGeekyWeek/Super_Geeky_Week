const contactController = require('../controllers/contactController');
const express = require('express');

const router = express.Router();

//get
router.get('/:id', contactController.getAllContactIdPresta);

//delete
router.delete('/:id', contactController.deleteContact);


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: API endpoints for contact operations
 */

/**
 * @swagger
 * /api/contact/{id}:
 *   get:
 *     summary: Get all contacts for a specific prestataire (provider)
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the prestataire (provider) to get contacts for
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully retrieved contacts for the specified prestataire
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
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the contact to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the contact
 *       '404':
 *         description: Contact not found
 *       '500':
 *         description: Internal server error
 */