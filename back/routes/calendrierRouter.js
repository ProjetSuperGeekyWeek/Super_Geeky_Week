const calendrierController = require('../controllers/crud/calendrierController');
const express = require('express');

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Calendrier
 *   description: API endpoints for calendrier operations
 */

/**
 * @swagger
 * /api/calendrier/getAllCalendrier:
 *   get:
 *     summary: Get all calendrier entries
 *     tags: [Calendrier]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all calendrier entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */

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