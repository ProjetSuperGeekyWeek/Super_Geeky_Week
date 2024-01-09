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

exports.deleteCalendrierById = async (req, res) => {
    const id_calendrier = req.query.id_calendrier;
    if(!id_calendrier){
        return res.status(400).send("UUID Required!");
    }
    calendrierService.deleteCalendrierById(id_calendrier, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteCalendrierById."
            });
        } else {
            res.send(data);
        }
    });
}