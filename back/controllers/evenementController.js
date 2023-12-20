const evenementService = require('../services/evenementService');

exports.getAllEvenement = async (req, res) => {
    evenementService.getAllEvenement((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb evenementController."
            });
        } else {
            res.send(data);
        }
    });
}