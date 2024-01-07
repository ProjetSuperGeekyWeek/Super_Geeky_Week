const sessionController = require('../controllers/sessionController');
const express = require('express');

var router = express.Router();

// get
router.get('/', sessionController.getIdSession);
router.get('/:id', sessionController.getSessionById);
router.get('/authentifier/:id', sessionController.getAuthentifierSession);
router.get('/admin/:id', sessionController.getAdminSession);

// post
router.post('/', sessionController.createSession);
router.post('/:idSession/:idPresta', sessionController.linkSessionPresta);

// put
router.put('/:id', sessionController.updateSessionTime);

// delete
router.delete('/', sessionController.cleanSession);
router.delete('/:id', sessionController.logoutSession);


module.exports = router;