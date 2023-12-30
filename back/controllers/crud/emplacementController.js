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