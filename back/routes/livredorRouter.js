const livredorController = require('../controllers/livredorController');
const express = require('express');

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Livredor
 *   description: API endpoints for livredor operations
 */

/**
 * @swagger
 * /api/livredor:
 *   get:
 *     summary: Get all testimonies from Livredor
 *     tags: [Livredor]
 *     responses:
 *       '200':
 *         description: Successfully retrieved testimonies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       [Define testimony properties here]
 *       '500':
 *         description: Internal server error
 */

// get
router.get('/', livredorController.getAllTemoignage);

router.get('/:id', livredorController.getTemoignageByIdPresta);

// post
router.post('/:id_presta/:pseudo/:temoignage', livredorController.postTemoignage)


module.exports = router;
