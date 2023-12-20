const personneService = require('../services/personneService');

exports.getAllPersonne = async (req, res) => {
    personneService.getAllPersonne((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb personneController."
            });
        } else {
            res.send(data);
        }
    });
}