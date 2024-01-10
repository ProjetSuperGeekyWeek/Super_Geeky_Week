const contactController = require('../controllers/contactController');
const express = require('express');

const router = express.Router();

//get
router.get('/:id', contactController.getAllContactIdPresta);

//delete
router.delete('/:id', contactController.deleteContact);


module.exports = router;