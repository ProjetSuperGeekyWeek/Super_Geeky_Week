const authentificationService = require('../services/authentificationService');

// get
exports.getPrestataireMailPassword = async (req, res) => {
    authentificationService.getPrestataireMailPassword(req.params.mail, req.params.mdp, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

exports.adminVerif = async (req, res) => {
    authentificationService.adminVerif(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}

// put
exports.changePassword = async (req, res) => {
    authentificationService.changePassword(req.params.id, req.params.mdp, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving prestataire."
            });
        } else {
            res.send(data);
        }
    });
}