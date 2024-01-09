const acheterService = require('../../services/crud/acheterService');

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

exports.getAllAcheterColumn = async (req, res) => {
    acheterService.getAllAcheterColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb getAllAcheterColumn."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

exports.addNewAcheter = async (req, res) => {
    acheterService.addNewAcheter(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewAcheter."
            });
        } else {
            res.send(data);
        }
    });
}