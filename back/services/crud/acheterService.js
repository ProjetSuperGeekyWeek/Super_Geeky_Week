const pool = require("../../database/db.js");

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

const addNewAcheter = (body, callback) => {
    addNewAcheterFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewAcheterFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO acheter (id_item,id_qr_code,consommer) VALUES ($1,$2,$3)', [body.id_item,body.id_qr_code,body.consommer]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteAcheterById = (id_acheter, callback) => {
    deleteAcheterByIdFromAPI(id_acheter).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteAcheterByIdFromAPI(id_acheter){
    const client = await pool.connect();
    try {
        await client.query('DELETE FROM acheter WHERE id_acheter=$1', [id_acheter]);
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllAcheter:getAllAcheter,
    getAllAcheterColumn:getAllAcheterColumn,
    addNewAcheter:addNewAcheter,
    deleteAcheterById:deleteAcheterById,
};