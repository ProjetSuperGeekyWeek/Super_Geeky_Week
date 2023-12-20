const pool = require("../database/db.js");

const getAllPersonneTag = (callback) => {
    getAllPersonneTagFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPersonneTagFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM personne_tag`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPersonneTag:getAllPersonneTag,
};