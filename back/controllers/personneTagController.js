const personneTagService = require('../services/personneTagService');

exports.getAllPersonneTag = async (req, res) => {
    personneTagService.getAllPersonneTag((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb personneTagController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllPersonneTagColumn = async (req, res) => {
    personneTagService.getAllPersonneTagColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de personneTag."
            });
        } else {
            res.send(data);
        }
    });
}