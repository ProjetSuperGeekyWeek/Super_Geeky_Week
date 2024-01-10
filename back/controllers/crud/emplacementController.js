const emplacementService = require('../../services/crud/emplacementService');

exports.getAllEmplacement = async (req, res) => {
    emplacementService.getAllEmplacement((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb emplacementController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllEmplacementColumn = async (req, res) => {
    emplacementService.getAllEmplacementColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur d'emplacement."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewEmplacement = async (req, res) => {
    emplacementService.addNewEmplacement(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewEmplacement."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteEmplacementById = async (req, res) => {
    const id_emplacement = req.query.id_emplacement;
    if(!id_emplacement){
        return res.status(400).send("UUID Required!");
    }
    emplacementService.deleteEmplacementById(id_emplacement, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteEmplacementById."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateEmplacement = async (req, res) => {
    emplacementService.updateEmplacement(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb updateEmplacement."
            });
        } else {
            res.send(data);
        }
    });
}