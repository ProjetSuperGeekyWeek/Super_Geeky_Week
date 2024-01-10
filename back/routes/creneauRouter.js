const creneauController = require("../controllers/crud/creneauController")
const express = require('express');
const router = express.Router();

router.get('/getAllCreneau', creneauController.getAllCreneau);
router.get('/getAllCreneauColumn', creneauController.getAllCreneauColumn);

module.exports = router;
