const pool = require("../../database/db.js");

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

const getAllPersonneColumn = (callback) => {
    getAllPersonneColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPersonneColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'personne'`;
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
    getAllPersonneColumn:getAllPersonneColumn,
};