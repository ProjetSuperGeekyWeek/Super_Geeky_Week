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

/**
 * @swagger
 * /api/qrcode/addQrCode:
 *   post:
 *     summary: Add a new QR code record
 *     tags: [QrCode]
 *     parameters:
 *       - in: body
 *         name: qrcode
 *         description: QR code data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_client
 *             - prenom_client
 *             - mail_client
 *           properties:
 *             nom_client:
 *               type: string
 *               example: "Doe"
 *             prenom_client:
 *               type: string
 *               example: "John"
 *             mail_client:
 *               type: string
 *               example: "john.doe@example.com"
 *     responses:
 *       '201':
 *         description: QR code record created successfully
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
 * /api/qrcode/deleteQrCode:
 *   delete:
 *     summary: Delete a QR code record by ID
 *     tags: [QrCode]
 *     parameters:
 *       - in: query
 *         name: id_qr_code
 *         description: ID of the QR code record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the QR code record
 *       '404':
 *         description: QR code record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/qrcode/updateQrCode:
 *   patch:
 *     summary: Update a QR code record
 *     tags: [QrCode]
 *     parameters:
 *       - in: body
 *         name: qrcode
 *         description: QR code data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_qr_code
 *             - nom_client
 *             - prenom_client
 *             - mail_client
 *           properties:
 *             id_qr_code:
 *               type: integer
 *               example: 1
 *             nom_client:
 *               type: string
 *               example: "UpdatedDoe"
 *             prenom_client:
 *               type: string
 *               example: "UpdatedJohn"
 *             mail_client:
 *               type: string
 *               example: "updated.john.doe@example.com"
 *     responses:
 *       '200':
 *         description: QR code record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: QR code record not found
 *       '500':
 *         description: Internal server error
 */