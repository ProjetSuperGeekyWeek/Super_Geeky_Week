const qrCodeController = require("../controllers/crud/qrCodeController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllQrCode', qrCodeController.getAllQrCode);
router.get('/getAllQrCodeColumn', qrCodeController.getAllQrCodeColumn);

//POST
router.post('/addQrCode', qrCodeController.addNewQrCode);

//DELETE
router.delete('/deleteQrCode', qrCodeController.deleteQrCodeById);

//PATCH
router.patch('/updateQrCode', qrCodeController.updateQrCode);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: QrCode
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/qrCode/getAllQrCode:
 *   get:
 *     summary: Get all QrCode
 *     tags: [QrCode]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all QrCode
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
 * /api/qrCode/getAllQrCodeColumn:
 *   get:
 *     summary: Get columns for QrCode
 *     tags: [QrCode]
 *     responses:
 *       '200':
 *         description: Successfully retrieved QrCode columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */
