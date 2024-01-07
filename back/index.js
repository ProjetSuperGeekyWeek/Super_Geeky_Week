const express = require('express');
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');
dotenv.config();

const carteRouter = require('./routes/carteRouter');
const prestataireRouter = require('./routes/prestataireRouter');
const clientRouter = require('./routes/clientRouter');
const boutiqueRouter = require('./routes/boutiqueRouter');
const calendrierRouter = require('./routes/calendrierRouter');
const crudRouter = require('./routes/crudRouter');

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


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log("\nprocess.env.PORT", process.env.PORT);
    console.log("process.env.DB_USERNAME", process.env.DB_USERNAME);
    console.log("process.env.DB_HOST", process.env.DB_HOST);
    console.log("process.env.DB_DATABASE", process.env.DB_DATABASE);
});