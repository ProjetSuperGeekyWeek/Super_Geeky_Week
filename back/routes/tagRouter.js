const tagController = require("../controllers/crud/tagController");
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllTag', tagController.getAllTag);
router.get('/getAllTagColumn', tagController.getAllTagColumn);

//POST
router.post('/addTag', tagController.addNewTag);

//DELETE
router.delete('/deleteTag', tagController.deleteTagById);

//PATCH
router.patch('/updateTag', tagController.updateTag);

module.exports = router;