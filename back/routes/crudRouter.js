/**
 * @swagger
 * tags:
 *   name: Crud
 *   description: API endpoints for crud operations
 */

/**
 * @swagger
 * /api/crud/getAllRole:
 *   get:
 *     summary: Get all roles
 *     tags: [Crud]
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
 * /api/crud/getAllRoleColumn:
 *   get:
 *     summary: Get columns for the roles
 *     tags: [Crud]
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
 * /api/crud/getAllAcheter:
 *   get:
 *     summary: Get all acheter records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all acheter records
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
 * /api/crud/getAllAcheterColumn:
 *   get:
 *     summary: Get columns for acheter records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved acheter record columns
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
 * /api/crud/getAllCalendrier:
 *   get:
 *     summary: Get all calendrier records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all calendrier records
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
 * /api/crud/getAllCalendrierColumn:
 *   get:
 *     summary: Get columns for calendrier records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved calendrier record columns
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
 * /api/crud/getAllCreneau:
 *   get:
 *     summary: Get all creneau records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all creneau records
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
 * /api/crud/getAllCreneauColumn:
 *   get:
 *     summary: Get columns for creneau records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved creneau record columns
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
 * /api/crud/getAllEmplacement:
 *   get:
 *     summary: Get all emplacement records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all emplacement records
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
 * /api/crud/getAllEmplacementColumn:
 *   get:
 *     summary: Get columns for emplacement records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved emplacement record columns
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
 * /api/crud/getAllEmplacementRessource:
 *   get:
 *     summary: Get all emplacement ressource records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all emplacement ressource records
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
 * /api/crud/getAllEmplacementRessourceColumn:
 *   get:
 *     summary: Get columns for emplacement ressource records
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved emplacement ressource record columns
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
 * /api/crud/getAllEvenement:
 *   get:
 *     summary: Get all events
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all events
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
 * /api/crud/getAllEvenementColumn:
 *   get:
 *     summary: Get columns for events
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved event columns
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
 * /api/crud/getAllItem:
 *   get:
 *     summary: Get all items
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all items
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
 * /api/crud/getAllItemColumn:
 *   get:
 *     summary: Get columns for items
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved item columns
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
 * /api/crud/getAllLignePanier:
 *   get:
 *     summary: Get all lignePanier
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all lignePanier
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
 * /api/crud/getAllLignePanierColumn:
 *   get:
 *     summary: Get columns for lignePanier
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved lignePanier columns
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
 * /api/crud/getAllPanier:
 *   get:
 *     summary: Get all panier
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all panier
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
 * /api/crud/getAllPanierColumn:
 *   get:
 *     summary: Get columns for panier
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved panier columns
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
 * /api/crud/getAllPersonne:
 *   get:
 *     summary: Get all personne
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all personne
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
 * /api/crud/getAllPersonneColumn:
 *   get:
 *     summary: Get columns for personne
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved personne columns
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
 * /api/crud/getAllPersonneTag:
 *   get:
 *     summary: Get all personneTag
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all personneTag
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
 * /api/crud/getAllPersonneTagColumn:
 *   get:
 *     summary: Get columns for personneTag
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved personneTag columns
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
 * /api/crud/getAllQrCode:
 *   get:
 *     summary: Get all QrCode
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all QrCode
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
 * /api/crud/getAllQrCodeColumn:
 *   get:
 *     summary: Get columns for QrCode
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved QrCode columns
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
 * /api/crud/getAllRessource:
 *   get:
 *     summary: Get all Ressources
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Ressources
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
 * /api/crud/getAllRessourceColumn:
 *   get:
 *     summary: Get columns for Ressources
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Ressource columns
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
 * /api/crud/getAllStand:
 *   get:
 *     summary: Get all Stands
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Stands
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
 * /api/crud/getAllStandColumn:
 *   get:
 *     summary: Get columns for Stands
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Stand columns
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
 * /api/crud/getAllTag:
 *   get:
 *     summary: Get all Tags
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Tags
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
 * /api/crud/getAllTagColumn:
 *   get:
 *     summary: Get columns for Tags
 *     tags: [Crud]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Tag columns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */