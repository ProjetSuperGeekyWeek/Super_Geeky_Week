const pool = require("../database/db.js");

const getAllRessource = (callback) => {
    getAllRessourceFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllRessourceFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM ressource`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllRessource:getAllRessource,
};