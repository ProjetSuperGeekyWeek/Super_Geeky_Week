const carteController = require('../controllers/carteController');
const express = require('express');

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Carte
 *   description: API endpoints for carte operations
 */

/**
 * @swagger
 * /api/carte/InfoBulle/{id}:
 *   get:
 *     summary: Get infobulle information for a specific id
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for infobulle information
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved infobulle information
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carte/InfoPanel/{id}:
 *   get:
 *     summary: Get infopanel information for a specific id
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for infopanel information
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved infopanel information
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carte/InfoPanelNoTake/{id}:
 *   get:
 *     summary: Get infopanel information (No Take) for a specific id
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for infopanel information
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved infopanel information (No Take)
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carte/AllStandsTaken:
 *   get:
 *     summary: Get all stands that are taken
 *     tags: [Carte]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all stands taken
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
 * /api/carte/Stand/{id}:
 *   post:
 *     summary: Save a stand for a specific id and prestataire
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for the stand
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully saved the stand
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carte/Stand/{id}:
 *   put:
 *     summary: Update a stand for a specific id and prestataire
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for the stand
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully updated the stand
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/carte/Stand/{id}:
 *   delete:
 *     summary: Delete a stand for a specific id
 *     tags: [Carte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID for the stand
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted the stand
 *       '500':
 *         description: Internal server error
 */

// affichage 
router.get('/InfoBulle/:id', carteController.getInfobulle);
router.get('/InfoPanel/:id', carteController.getInfoPanel);
router.get('/InfoPanelNoTake/:id', carteController.getInfoPanelNoTake);
router.get('/AllStandsTaken', carteController.getAllStandsTaken);

// création
router.post('/Stand/:id', carteController.saveStand);
// query -> id_prestataire

// modification
router.put('/Stand/:id', carteController.updateStand);
// query -> id_prestataire

// suppression
router.delete('/Stand/:id', carteController.deleteStand);

module.exports = router;