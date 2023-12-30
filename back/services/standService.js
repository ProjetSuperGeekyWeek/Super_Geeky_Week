const pool = require("../database/db.js");

const getAllStand = (callback) => {
    getAllStandFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllStandFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM stand`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllStandColumn = (callback) => {
    getAllStandColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllStandColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'stand'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllStand:getAllStand,
    getAllStandColumn:getAllStandColumn,
};