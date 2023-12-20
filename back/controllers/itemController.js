const itemService = require('../services/itemService');

exports.getAllItem = async (req, res) => {
    itemService.getAllItem((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb itemController."
            });
        } else {
            res.send(data);
        }
    });
}