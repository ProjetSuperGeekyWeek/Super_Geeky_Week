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

const getAllEmplacementRessourceColumn = (callback) => {
    getAllEmplacementRessourceColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementRessourceColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'emplacement_ressource'`;
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
    getAllEmplacementRessourceColumn:getAllEmplacementRessourceColumn,
};