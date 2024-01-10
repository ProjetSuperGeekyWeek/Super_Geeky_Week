const prestataireSerices = require('../services/prestataireService');

exports.getAllPrestataires = async (req, res) => {
    prestataireSerices.getAllPrestataires((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getPrestataireById = async (req, res) => {
    prestataireSerices.getPrestataireById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getPrestataireByNom = async (req, res) => {
    prestataireSerices.getPrestataireByNom(req.params.nom, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getPrestataireByTag = async (req, res) => {
    prestataireSerices.getPrestataireByTag(req.params.tag, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getPrestataireTags = async (req, res) => {
    prestataireSerices.getPrestataireTags(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

exports.sendContactMessage = async (req, res) => {
    prestataireSerices.sendContactMessage(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while sending message."
            });
        } else {
            res.send(data);
        }
    });
}
