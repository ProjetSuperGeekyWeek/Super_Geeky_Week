const personneService = require('../../services/crud/personneService');

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

exports.addNewPersonne = async (req, res) => {
    personneService.addNewPersonne(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewPersonne."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deletePersonneById = async (req, res) => {
    const id_personne = req.query.id_personne;
    if(!id_personne){
        return res.status(400).send("UUID Required!");
    }
    personneService.deletePersonneById(id_personne, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deletePersonneById."
            });
        } else {
            res.send(data);
        }
    });
}