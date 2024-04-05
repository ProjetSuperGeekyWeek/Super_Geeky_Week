const itemService = require('../../services/crud/itemService');

exports.getAllItem = async (req, res) => {
    itemService.getAllItem((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb itemController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getItemById = async (req, res) => {
    itemService.getItemByIdApi(req.params.id_item, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "pb itemController"
            });
        } else {
            res.send({error: 0, data:data})
        }
    })
}

exports.getAllItemColumn = async (req, res) => {
    itemService.getAllItemColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur d'item."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewItem = async (req, res) => {
    itemService.addNewItem(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewItem."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteItemById = async (req, res) => {
    const id_item = req.query.id_item;
    const id_personne = req.query.id_personne;
    const id_jour = req.query.id_jour;
    if(!id_item){
        return res.status(400).send("UUID Required!");
    }
    itemService.deleteItemById(id_item,id_personne,id_jour, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteItemById."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateItem = async (req, res) => {
    itemService.updateItem(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb updateItem."
            });
        } else {
            res.send(data);
        }
    });
}