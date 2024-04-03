const pool = require("../../database/db.js");
const { uuid } = require('uuidv4');

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

const addNewQrCode = (callback) => {
    addNewQrCodeFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewQrCodeFromAPI(){
    const client = await pool.connect();
    try {
        const uuidQrCode= uuid()
        await client.query('INSERT INTO qr_code (id_qr_code) VALUES ($1)', [uuidQrCode]);
        // Corrected the commit command
        await client.query('COMMIT');
        return uuidQrCode
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteQrCodeById = (id_qr_code, callback) => {
    deleteQrCodeByIdFromAPI(id_qr_code).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteQrCodeByIdFromAPI(id_qr_code){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM qr_code WHERE nom_client LIKE 'default_QRCODE'";
        let result = await client.query(query);
        if(result.rowCount !== 1) {
            query = "INSERT INTO qr_code (nom_client,prenom_client,mail_client) VALUES ('default_QRCODE','default_QRCODE','dQ@dQ.dQ')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM qr_code WHERE nom_client LIKE 'default_QRCODE'";
            result = await client.query(query);
        }
        await client.query('UPDATE acheter SET id_qr_code=$1 WHERE id_qr_code=$2', [result.rows[0].id_qr_code,id_qr_code]);
        await client.query('COMMIT');
        await client.query('DELETE FROM qr_code WHERE id_qr_code=$1', [id_qr_code]);
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updateQrCode = (body, callback) => {
    updateQrCodeFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateQrCodeFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE qr_code SET nom_client=$1,prenom_client=$2,mail_client=$3 WHERE id_qr_code=$4'
            , [body.nom_client,body.prenom_client,body.mail_client,body.id_qr_code]);
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
    deleteQrCodeById:deleteQrCodeById,
    updateQrCode:updateQrCode,
};