const personneService = require('../services/personneService');

exports.getAllPersonne = async (req, res) => {
    personneService.getAllPersonne((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb personneController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllPersonneColumn = async (req, res) => {
    personneService.getAllPersonneColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de personne."
            });
        } else {
            res.send(data);
        }
    });
}
