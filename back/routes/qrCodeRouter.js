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
