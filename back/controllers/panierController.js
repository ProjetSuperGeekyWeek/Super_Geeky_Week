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