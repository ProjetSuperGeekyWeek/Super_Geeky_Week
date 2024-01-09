const inscriptionService = require('../services/inscriptionService');


//get
exports.getAllInscriptionsIdPresta = async (req, res) => {
    inscriptionService.getAllInscriptionsIdPresta(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving inscription."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllHorairesIdInscription = async (req, res) => {
    inscriptionService.getAllHorairesIdInscription(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving inscription."
            });
        } else {
            res.send(data);
        }
    });
}

//post
exports.postInscrit = async (req, res) => {
    inscriptionService.postInscrit(req.params.id, req.body.nom, 
        req.body.prenom, req.body.description, req.body.id_calendrier, 
        (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while posting inscription."
            });
        } else {
            res.send(data);
        }
    });
}

//delete
exports.deleteInscrit = async (req, res) => {
    inscriptionService.deleteInscrit(req.params.id, req.params.nom, 
            req.params.prenom, req.params.id_calendrier, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting inscription."
            });
        } else {
            res.send(data);
        }
    });
}