const pool = require("../database/db.js");

const getAllPersonne = (callback) => {
    getAllPersonneFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPersonneFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM personne`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPersonne:getAllPersonne,
};