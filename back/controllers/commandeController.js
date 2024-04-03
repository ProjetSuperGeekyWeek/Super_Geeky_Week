const commandeService = require('../services/commandeService');

// get
exports.getCommande = async (req, res) => {
    commandeService.getCommande(req.params.uuid_commande, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving commande."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getCommandePresta = async (req, res) => {
    commandeService.getCommandePresta(req.params.id_personne, req.params.uuid_commande, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving commande."
            });
        } else {
            res.send(data);
        }
    });
}

// put
exports.validerLigneCommande = async (req, res) => {
    commandeService.validerLigneCommande(req.params.id_acheter, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving commande."
            });
        } else {
            res.send(data);
        }
    });
}
