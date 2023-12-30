const panierService = require('../services/panierService');

exports.getAllPanier = async (req, res) => {
    panierService.getAllPanier((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb panierController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllPanierColumn = async (req, res) => {
    panierService.getAllPanierColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de panier."
            });
        } else {
            res.send(data);
        }
    });
}