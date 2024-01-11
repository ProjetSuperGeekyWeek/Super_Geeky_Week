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

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/role/getAllRole:
 *   get:
 *     summary: Get all roles
 *     tags: [Role]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_role:
 *                     type: integer
 *                   nom_role:
 *                     type: string
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/role/getAllRoleColumn:
 *   get:
 *     summary: Get columns for the roles
 *     tags: [Role]
 *     responses:
 *       '200':
 *         description: Successfully retrieved role columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */
