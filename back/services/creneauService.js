const pool = require("../database/db.js");

const getAllCreneau = (callback) => {
    getAllCreneauFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCreneauFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM creneau`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllCreneauColumn = (callback) => {
    getAllCreneauColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCreneauColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'creneau'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllCreneau:getAllCreneau,
    getAllCreneauColumn:getAllCreneauColumn,
};