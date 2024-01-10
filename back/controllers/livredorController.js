const livredorService = require('../services/livredorService');

// get
exports.getAllTemoignage = async (req, res) => {
    livredorService.getAllTemoignage((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving temoignage."
            });
        } else {
            res.json( data );
        }
    });
};

exports.getTemoignageByIdPresta = async (req, res) => {
    const id = req.params.id;
    livredorService.getTemoignageByIdPresta(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Temoignage with id ${id}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Temoignage with id " + id });
            }
        } else {
            res.json( data );
        }
    });
};

// post
exports.postTemoignage = async (req, res) => {
    const id_presta = req.params.id_presta;
    const pseudo = req.params.pseudo;
    const temoignage = req.params.temoignage;
    livredorService.postTemoignage(id_presta, pseudo, temoignage, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while posting temoignage."
            });
        } else {
            res.json( data );
        }
    });
};
