const creneauService = require('../services/creneauService');

exports.getAllCreneau = async (req, res) => {
    creneauService.getAllCreneau((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb roleController."
            });
        } else {
            res.send(data);
        }
    });
}