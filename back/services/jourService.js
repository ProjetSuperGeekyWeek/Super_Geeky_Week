const pool = require("../database/db.js");

const getAllJour = (callback) => {
    getAllJourFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllJourFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM jour`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllJourColumn = (callback) => {
    getAllJourColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllJourColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'calendrier'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllJour:getAllJour,
    getAllJourColumn:getAllJourColumn,

};