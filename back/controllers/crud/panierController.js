const panierService = require('../../services/crud/panierService');

exports.getAllPanier = async (req, res) => {
    panierService.getAllPanier((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb panierController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllPanierColumn = async (req, res) => {
    panierService.getAllPanierColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de panier."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewPanier = async (req, res) => {
    panierService.addNewPanier(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewPanier."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deletePanierById = async (req, res) => {
    const id_panier = req.query.id_panier;
    if(!id_panier){
        return res.status(400).send("UUID Required!");
    }
    panierService.deletePanierById(id_panier, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deletePanierById."
            });
        } else {
            res.send(data);
        }
    });
}