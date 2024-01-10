const tagService = require('../../services/crud/tagService');

exports.getAllTag = async (req, res) => {
    tagService.getAllTag((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb tagController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllTagColumn = async (req, res) => {
    tagService.getAllTagColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Problème avec le contrôleur de tag."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewTag = async (req, res) => {
    tagService.addNewTag(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewTag."
            });
        } else {
            res.send(data);
        }
    });
}


exports.deleteTagById = async (req, res) => {
    const id_tag = req.query.id_tag;
    if(!id_tag){
        return res.status(400).send("UUID Required!");
    }
    tagService.deleteTagById(id_tag, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteTagById."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateTag = async (req, res) => {
    tagService.updateTag(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb updateTag."
            });
        } else {
            res.send(data);
        }
    });
}