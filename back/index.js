const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require('cors');
/*const listeRoutes = require('./liste.router.js');*/
app.use(cors({
    origin : '*'
}));

app.use(express.json());
/*app.use("/api/liste", );*/

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log("\nprocess.env.PORT", process.env.PORT);
    console.log("process.env.DB_USERNAME", process.env.DB_USERNAME);
    console.log("process.env.DB_HOST", process.env.DB_HOST);
    console.log("process.env.DB_DATABASE", process.env.DB_DATABASE);
});