const pool = require("../database/db.js");

const getAllAcheter = (callback) => {
    getAllAcheterFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllAcheterFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM acheter`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllAcheterColumn = (callback) => {
    getAllAcheterColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllAcheterColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'acheter'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}
module.exports = {
    getAllAcheter:getAllAcheter,
    getAllAcheterColumn:getAllAcheterColumn,
};