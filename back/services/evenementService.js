const pool = require("../database/db.js");

const getAllEvenement = (callback) => {
    getAllEvenementFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM evenement`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllEvenementColumn = (callback) => {
    getAllEvenementColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'evenement'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEvenement:getAllEvenement,
    getAllEvenementColumn:getAllEvenementColumn,
};