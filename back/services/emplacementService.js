const pool = require("../database/db.js");

const getAllEmplacement = (callback) => {
    getAllEmplacementFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM emplacement`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEmplacement:getAllEmplacement,
};