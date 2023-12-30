const creneauService = require('../../services/crud/creneauService');

exports.getAllCreneau = async (req, res) => {
    creneauService.getAllCreneau((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb roleController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllCreneauColumn = async (req, res) => {
    creneauService.getAllCreneauColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb roleController."
            });
        } else {
            res.send(data);
        }
    });
}