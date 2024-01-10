const qrCodeService = require('../../services/crud/qrCodeService');

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

exports.addNewQrCode = async (req, res) => {
    qrCodeService.addNewQrCode(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewQrCode."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteQrCodeById = async (req, res) => {
    const id_qr_code = req.query.id_qr_code;
    if(!id_qr_code){
        return res.status(400).send("UUID Required!");
    }
    qrCodeService.deleteQrCodeById(id_qr_code, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteQrCodeById."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateQrCode = async (req, res) => {
    qrCodeService.updateQrCode(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb updateQrCode."
            });
        } else {
            res.send(data);
        }
    });
}