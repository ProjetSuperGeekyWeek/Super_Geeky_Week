const pool = require("../../database/db.js");

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

const addNewEmplacement = (body, callback) => {
    addNewEmplacementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewEmplacementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO emplacement (nom_emplacement) VALUES ($1)', [body.nom_emplacement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEmplacement:getAllEmplacement,
    getAllEmplacementColumn:getAllEmplacementColumn,
    addNewEmplacement:addNewEmplacement,
};