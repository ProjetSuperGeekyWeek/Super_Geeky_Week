const emplacementRessourceService = require('../services/emplacementRessourceService');

exports.getAllEmplacementRessource = async (req, res) => {
    emplacementRessourceService.getAllEmplacementRessource((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb emplacementRessourceController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllEmplacementRessourceColumn = async (req, res) => {
    emplacementRessourceService.getAllEmplacementRessourceColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur d'emplacementRessource."
            });
        } else {
            res.send(data);
        }
    });
}