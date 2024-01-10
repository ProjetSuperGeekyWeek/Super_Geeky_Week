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

exports.getAllInscritsIdInscription = async (req, res) => {
    inscriptionService.getAllInscritsIdInscription(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving inscription."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getJours = async (req, res) => {
    inscriptionService.getJours((err, data) => {
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

exports.postHoraire = async (req, res) => {
    inscriptionService.postHoraire(req.params.id, req.params.id_jour,
        req.params.heure_debut, req.params.heure_fin, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while posting inscription."
            });
        } else {
            res.send(data);
        }
    });
}

//put
exports.putInscription = async (req, res) => {
    inscriptionService.putInscription(req.params.id, req.params.titre, 
        req.params.description, req.params.nb_place, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating inscription."
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

exports.deleteHoraire = async (req, res) => {
    inscriptionService.deleteHoraire(req.params.id, req.params.id_calendrier, 
        (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting inscription."
            });
        } else {
            res.send(data);
        }
    });
}