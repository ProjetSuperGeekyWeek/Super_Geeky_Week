const prestataireSerices = require('../services/prestataireServices');

exports.getAllPrestataires = async (req, res) => {
    prestataireSerices.getAllPrestataires((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataires."
            });
        } else {
            res.send(data);
        }
    });
}