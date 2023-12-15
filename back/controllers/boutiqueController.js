const boutiqueService = require('../services/boutiqueService');

exports.getAllItems = async (req, res) => {
    boutiqueService.getAllItems((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}