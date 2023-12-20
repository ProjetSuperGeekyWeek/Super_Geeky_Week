const tagService = require('../services/tagService');

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