const pool = require("../../database/db.js");

const getAllQrCode = (callback) => {
    getAllQrCodeFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllQrCodeFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM qr_code`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllQrCodeColumn = (callback) => {
    getAllQrCodeColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllQrCodeColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'qr_code'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewQrCode = (body, callback) => {
    addNewQrCodeFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewQrCodeFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO qr_code (nom_client,prenom_client,mail_client) VALUES ($1,$2,$3)', [body.nom_client,body.prenom_client,body.mail_client]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllQrCode:getAllQrCode,
    getAllQrCodeColumn:getAllQrCodeColumn,
    addNewQrCode:addNewQrCode,
};