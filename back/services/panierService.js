const pool = require("../database/db.js");

const getAllPanier = (callback) => {
    getAllPanierFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPanierFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM panier`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPanier:getAllPanier,
};