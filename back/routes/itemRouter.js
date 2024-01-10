const itemController = require("../controllers/crud/itemController")
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllItem', itemController.getAllItem);
router.get('/getAllItemColumn', itemController.getAllItemColumn);

//POST
router.post('/addItem', itemController.addNewItem);

//DELETE
router.delete('/deleteItem', itemController.deleteItemById);

//PATCH
router.patch('/updateItem', itemController.updateItem);

module.exports = router;