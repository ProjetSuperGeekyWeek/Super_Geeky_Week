const tagService = require('../../services/crud/tagService');

exports.getAllTag = async (req, res) => {
    tagService.getAllTag((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb tagController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllTagColumn = async (req, res) => {
    tagService.getAllTagColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de tag."
            });
        } else {
            res.send(data);
        }
    });
}