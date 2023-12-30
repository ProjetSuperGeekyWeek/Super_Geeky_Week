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

const getAllEmplacementColumn = (callback) => {
    getAllEmplacementColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'emplacement'`;
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
    getAllEmplacementColumn:getAllEmplacementColumn,
};