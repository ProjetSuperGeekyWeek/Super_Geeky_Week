const pool = require("../../database/db.js");

const getAllItem = (callback) => {
    getAllItemFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllItemFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM item`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllItemColumn = (callback) => {
    getAllItemColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllItemColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'item'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllItem:getAllItem,
    getAllItemColumn:getAllItemColumn,
};