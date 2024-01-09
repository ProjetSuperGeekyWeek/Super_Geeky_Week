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
const crudRouter = require('./routes/crudRouter');
const authentificationRouter = require('./routes/authentificationRouter');
const livredorRouter = require('./routes/livredorRouter');


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
app.use('/api/crud', crudRouter);
app.use('/api/authentification', authentificationRouter);
app.use('/api/livredor', livredorRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log("\nprocess.env.PORT", process.env.PORT);
    console.log("process.env.DB_USERNAME", process.env.DB_USERNAME);
    console.log("process.env.DB_HOST", process.env.DB_HOST);
    console.log("process.env.DB_DATABASE", process.env.DB_DATABASE);
});
