const lignePanierService = require('../../services/crud/lignePanierService');

exports.getAllLignePanier = async (req, res) => {
    lignePanierService.getAllLignePanier((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb lignePanierController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllLignePanierColumn = async (req, res) => {
    lignePanierService.getAllLignePanierColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de lignePanier."
            });
        } else {
            res.send(data);
        }
    });
}