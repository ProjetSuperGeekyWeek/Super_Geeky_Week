const jourService = require('../services/jourService');

// get
exports.getAllJour = async (req, res) => {
    jourService.getAllJour((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllJourColumn = async (req, res) => {
    jourService.getAllJourColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}