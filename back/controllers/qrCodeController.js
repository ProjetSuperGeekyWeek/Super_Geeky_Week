const qrCodeService = require('../services/qrCodeService');

exports.getAllQrCode = async (req, res) => {
    qrCodeService.getAllQrCode((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb qrCodeController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllQrCodeColumn = async (req, res) => {
    qrCodeService.getAllQrCodeColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de QrCode."
            });
        } else {
            res.send(data);
        }
    });
}