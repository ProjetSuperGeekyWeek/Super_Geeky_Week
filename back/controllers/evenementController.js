const evenementService = require('../services/evenementService');

exports.getAllEvenement = async (req, res) => {
    evenementService.getAllEvenement((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb evenementController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllEvenementColumn = async (req, res) => {
    evenementService.getAllEvenementColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur d'événement."
            });
        } else {
            res.send(data);
        }
    });
}