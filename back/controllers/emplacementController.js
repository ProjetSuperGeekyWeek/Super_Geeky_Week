const emplacementService = require('../services/emplacementService');

exports.getAllEmplacement = async (req, res) => {
    emplacementService.getAllEmplacement((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb emplacementController."
            });
        } else {
            res.send(data);
        }
    });
}