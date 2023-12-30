const pool = require("../../database/db.js");

const getAllLignePanier = (callback) => {
    getAllLignePanierFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllLignePanierFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM ligne_panier`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllLignePanierColumn = (callback) => {
    getAllLignePanierColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllLignePanierColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'ligne_panier'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllLignePanier:getAllLignePanier,
    getAllLignePanierColumn:getAllLignePanierColumn,
};