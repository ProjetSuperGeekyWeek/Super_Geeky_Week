const lignePanierService = require('../services/lignePanierService');

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