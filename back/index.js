const express = require('express');
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
dotenv.config();

const carteRouter = require('./routes/carteRouter');
const prestataireRouter = require('./routes/prestataireRouter');
const clientRouter = require('./routes/clientRouter');
const boutiqueRouter = require('./routes/boutiqueRouter');
const calendrierRouter = require('./routes/calendrierRouter');
const authentificationRouter = require('./routes/authentificationRouter');
const inscriptionRouter = require('./routes/inscriptionRouter');
const livredorRouter = require('./routes/livredorRouter');
const roleRouter = require('./routes/roleRouter')
const acheterRouter = require('./routes/acheterRouter')
const creneauRouter = require('./routes/creneauRouter')
const emplacementRouter = require('./routes/emplacementRouter')
const emplacementRessourceRouter= require('./routes/emplacementRessourceRouter')
const evenementRouter = require('./routes/evenementRouter')
const itemRouter = require('./routes/itemRouter')
const lignePanierRouter = require('./routes/lignePanierRouter')
const panierRouter = require('./routes/panierRouter')
const personneRouter = require('./routes/personneRouter')
const personneTagRouter = require('./routes/personneTagRouter')
const qrCodeRouter = require('./routes/qrCodeRouter')
const ressourceRouter = require('./routes/ressourceRouter')
const standRouter = require('./routes/standRouter')
const jourRouter = require('./routes/jourRouter')
const tagRouter = require('./routes/tagRouter')
const contactRouter = require('./routes/contactRouter')
const commandeRouter = require('./routes/commandeRouter');

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Your API Documentation",
            description: "API documentation for your project",
            version: "1.0.0",
        },
    },
    apis: ["./routes/*.js"], // Specify the path to your route files
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors({
    origin : '*'
}));

app.use(cookieparser());

app.use(express.json());
app.use('/api/carte_interactive', carteRouter);
app.use('/api/prestataire', prestataireRouter);
app.use('/api/client', clientRouter);
app.use('/api/boutique', boutiqueRouter);
app.use('/api/calendrier', calendrierRouter);
app.use('/api/authentification', authentificationRouter);
app.use('/api/inscription', inscriptionRouter);
app.use('/api/livredor', livredorRouter);
app.use('/api/role', roleRouter);
app.use('/api/acheter', acheterRouter);
app.use('/api/creneau', creneauRouter);
app.use('/api/emplacement', emplacementRouter);
app.use('/api/emplacementRessource', emplacementRessourceRouter);
app.use('/api/evenement', evenementRouter)
app.use('/api/item', itemRouter);
app.use('/api/lignePanier', lignePanierRouter)
app.use('/api/panier', panierRouter)
app.use('/api/personne', personneRouter)
app.use('/api/personneTag', personneTagRouter)
app.use('/api/qrCode', qrCodeRouter)
app.use('/api/ressource', ressourceRouter)
app.use('/api/stand', standRouter)
app.use('/api/jour', jourRouter)
app.use('/api/tag', tagRouter)
app.use('/api/contact', contactRouter)
app.use('/api/commande', commandeRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log("\nprocess.env.PORT", process.env.PORT);
    console.log("process.env.DB_USERNAME", process.env.DB_USERNAME);
    console.log("process.env.DB_HOST", process.env.DB_HOST);
    console.log("process.env.DB_DATABASE", process.env.DB_DATABASE);
});
