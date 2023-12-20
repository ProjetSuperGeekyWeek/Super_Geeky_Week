const standService = require('../services/standService');

exports.getAllStand = async (req, res) => {
    standService.getAllStand((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb standController."
            });
        } else {
            res.send(data);
        }
    });
}