const carteService = require('../services/carteService');

exports.getInfobulle = async (req, res) => {
    try {
        const id = req.params.id;
        const dataInfobulle = await carteService.getInfobulle(id);
        res.status(200).json(dataInfobulle);
    } catch (e) {
        res.status(400).json(e);
    }
}

exports.getInfoPanel = async (req, res) => {
    try {
        const id = req.params.id;
        const dataInfoPanel = await carteService.getInfoPanel(id);
        res.status(200).json(dataInfoPanel);
    } catch (e) {
        res.status(400).json(e);
    }
}

exports.saveStand = async (req, res) => {
    try {
        const id = req.params.id;
        const id_prestataire = req.query.id_prestataire;
        const dataInfobulle = await carteService.saveStand(id, id_prestataire);
        res.status(200).json(dataInfobulle);
    } catch (e) {
        res.status(400).json(e);
    }
}

exports.updateStand = async (req, res) => {
    try {
        const id = req.params.id;
        const id_prestataire = req.query.id_prestataire;
        const dataInfobulle = await carteService.updateStand(id, id_prestataire);
        res.status(200).json(dataInfobulle);
    } catch (e) {
        res.status(400).json(e);
    }
}

exports.deleteStand = async (req, res) => {
    try {
        const id = req.params.id;
        const dataInfobulle = await carteService.deleteStand(id);
        res.status(200).json(dataInfobulle);
    } catch (e) {
        res.status(400).json(e);
    }
}