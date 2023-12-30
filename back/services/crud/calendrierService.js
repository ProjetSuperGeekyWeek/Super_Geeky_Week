const pool = require("../../database/db.js");

const getAllCalendrier = (callback) => {
    getAllCalendrierFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCalendrierFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM calendrier`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllCalendrierColumn = (callback) => {
    getAllCalendrierColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCalendrierColumnFromAPI(){
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
    getAllCalendrier:getAllCalendrier,
    getAllCalendrierColumn:getAllCalendrierColumn,
};