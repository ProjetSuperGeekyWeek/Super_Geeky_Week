const calendrierController = require('../controllers/crud/calendrierController');
const express = require('express');

var router = express.Router();
//GET
router.get('/getAllCalendrier', calendrierController.getAllCalendrier);
router.get('/getAllCalendrierColumn', calendrierController.getAllCalendrierColumn);

//POST
router.post('/addCalendrier', calendrierController.addNewCalendrier);

//DELETE
/*router.delete('/deleteCalendrier', calendrierController.deleteCalendrierById);*/

//UPDATE
router.patch('/updateCalendrier', calendrierController.updateCalendrier);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Calendrier
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/calendrier/getAllCalendrier:
 *   get:
 *     summary: Get all acheter records
 *     tags: [Calendrier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all acheter records
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
 * /api/calendrier/getAllCalendrierColumn:
 *   get:
 *     summary: Get columns for calendrier records
 *     tags: [Calendrier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved calendrier record columns
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
 * /api/calendrier/addCalendrier:
 *   post:
 *     summary: Add a new calendrier record
 *     tags: [Calendrier]
 *     parameters:
 *       - in: body
 *         name: calendrier
 *         description: Calendrier data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - id_jour
 *             - horaire_debut
 *             - horaire_fin
 *           properties:
 *             id_jour:
 *               type: integer
 *               example: 1
 *             horaire_debut:
 *               type: string
 *               example: "08:00"
 *             horaire_fin:
 *               type: string
 *               example: "17:00"
 *     responses:
 *       '201':
 *         description: Calendrier record created successfully
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
 * /api/calendrier/deleteCalendrier:
 *   delete:
 *     summary: Delete a calendrier record by ID
 *     tags: [Calendrier]
 *     parameters:
 *       - in: query
 *         name: id_calendrier
 *         description: ID of the calendrier record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the calendrier record
 *       '404':
 *         description: Calendrier record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/calendrier/updateCalendrier:
 *   patch:
 *     summary: Update a calendrier record
 *     tags: [Calendrier]
 *     parameters:
 *       - in: body
 *         name: calendrier
 *         description: Calendrier data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_calendrier
 *             - id_jour
 *             - horaire_debut
 *             - horaire_fin
 *           properties:
 *             id_calendrier:
 *               type: integer
 *               example: 1
 *             id_jour:
 *               type: integer
 *               example: 2
 *             horaire_debut:
 *               type: string
 *               example: "09:00"
 *             horaire_fin:
 *               type: string
 *               example: "18:00"
 *     responses:
 *       '200':
 *         description: Calendrier record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Calendrier record not found
 *       '500':
 *         description: Internal server error
 */