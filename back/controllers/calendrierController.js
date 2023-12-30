const calendrierService = require('../services/calendrierService');

exports.getAllCalendrier = async (req, res) => {
    calendrierService.getAllCalendrier((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllCalendrierColumn = async (req, res) => {
    calendrierService.getAllCalendrierColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}