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