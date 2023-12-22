const pool = require("../database/db.js");

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

module.exports = {
    getAllQrCode:getAllQrCode,
    getAllQrCodeColumn:getAllQrCodeColumn,
};