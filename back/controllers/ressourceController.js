const ressourceService = require('../services/ressourceService');

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