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

exports.deleteAcheterById = async (req, res) => {
    const id_acheter = req.query.id_acheter;
    if(!id_acheter){
        return res.status(400).send("UUID Required!");
    }
    acheterService.deleteAcheterById(id_acheter, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteAcheterById."
            });
        } else {
            res.send(data);
        }
    });
}