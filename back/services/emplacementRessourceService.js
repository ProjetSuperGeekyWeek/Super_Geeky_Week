const pool = require("../database/db.js");

const getAllEmplacementRessource = (callback) => {
    getAllEmplacementRessourceFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementRessourceFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM emplacement_ressource`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEmplacementRessource:getAllEmplacementRessource,
};