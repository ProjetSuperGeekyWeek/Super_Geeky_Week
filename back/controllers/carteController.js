const carteService = require('../services/carteService');

exports.getInfobulle = async (req, res) => {
    const id = req.params.id;
    carteService.getInfobulle(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving infobulle."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getInfoPanel = async (req, res) => {
    const id = req.params.id;
    carteService.getInfoPanel(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving infopanel."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getInfoPanelNoTake = async (req, res) => {
    const id = req.params.id;
    carteService.getInfoPanelNoTake(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving infopanel."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllStandsTaken = async (req, res) => {
    carteService.getAllStandsTaken((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stands taken."
            });
        } else {
            res.send(data);
        }
    });
}

exports.saveStand = async (req, res) => {
    const id = req.params.id;
    const id_prestataire = req.query.id_prestataire;
    carteService.saveStand(id, id_prestataire, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while saving stand."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateStand = async (req, res) => {
    const id = req.params.id;
    const id_prestataire = req.query.id_prestataire;
    carteService.updateStand(id, id_prestataire, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating stand."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteStand = async (req, res) => {
    const id = req.params.id;
    carteService.deleteStand(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting stand."
            });
        } else {
            res.send(data);
        }
    });
}