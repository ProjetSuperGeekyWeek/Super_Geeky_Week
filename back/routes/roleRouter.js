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

/**
 * @swagger
 * /api/role/addRole:
 *   post:
 *     summary: Add a new role record
 *     tags: [Role]
 *     parameters:
 *       - in: body
 *         name: role
 *         description: Role data to create a new record
 *         schema:
 *           type: object
 *           required:
 *             - nom_role
 *           properties:
 *             nom_role:
 *               type: string
 *               example: "Visiteur"
 *     responses:
 *       '201':
 *         description: Role record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/role/deleteRole:
 *   delete:
 *     summary: Delete a role record by ID
 *     tags: [Role]
 *     parameters:
 *       - in: query
 *         name: id_role
 *         description: ID of the role record to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Successfully deleted the role record
 *       '404':
 *         description: Role record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/role/updateRole:
 *   patch:
 *     summary: Update a role record
 *     tags: [Role]
 *     parameters:
 *       - in: body
 *         name: role
 *         description: Role data to update a record
 *         schema:
 *           type: object
 *           required:
 *             - id_role
 *             - nom_role
 *           properties:
 *             id_role:
 *               type: integer
 *               example: 1
 *             nom_role:
 *               type: string
 *               example: "Admin"
 *     responses:
 *       '200':
 *         description: Role record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Role record not found
 *       '500':
 *         description: Internal server error
 */
