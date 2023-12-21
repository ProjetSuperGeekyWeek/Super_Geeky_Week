const acheterService = require('../services/acheterService');

exports.getAllAcheter = async (req, res) => {
    acheterService.getAllAcheter((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb acheterController."
            });
        } else {
            res.status(200).send(data);
        }
    });
}