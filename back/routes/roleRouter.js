const roleController = require("../controllers/crud/roleController");
const express = require('express');
const router = express.Router();

//GET
router.get('/getAllRole', roleController.getAllRole);
router.get('/getAllRoleColumn', roleController.getAllRoleColumn);

//POST
router.post('/addRole', roleController.addNewRole);

//DELETE
router.delete('/deleteRole', roleController.deleteRoleById);

//PATCH
router.patch('/updateRole', roleController.updateRole);

module.exports = router;
