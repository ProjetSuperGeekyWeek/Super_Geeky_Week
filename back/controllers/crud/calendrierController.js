const calendrierService = require('../../services/crud/calendrierService');
const roleService = require("../../services/crud/roleService");
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

exports.addNewCalendrier = async (req, res) => {
    calendrierService.addNewCalendrier(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewCalendrier."
            });
        } else {
            res.send(data);
        }
    });
}