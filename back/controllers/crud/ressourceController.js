const ressourceService = require('../../services/crud/ressourceService');

exports.getAllRessource = async (req, res) => {
    ressourceService.getAllRessource((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb ressourceController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllRessourceColumn = async (req, res) => {
    ressourceService.getAllRessourceColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de ressource."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewRessource = async (req, res) => {
    ressourceService.addNewRessource(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewRessource."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteRessourceById = async (req, res) => {
    const id_ressource = req.query.id_ressource;
    if(!id_ressource){
        return res.status(400).send("UUID Required!");
    }
    ressourceService.deleteRessourceById(id_ressource, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteRessourceById."
            });
        } else {
            res.send(data);
        }
    });
}