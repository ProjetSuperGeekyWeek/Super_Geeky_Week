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