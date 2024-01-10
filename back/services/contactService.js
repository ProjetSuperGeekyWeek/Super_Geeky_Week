const pool = require("../database/db.js");

//get
const getAllContactIdPresta = (id, callback) => {
    getAllContactIdPrestaFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllContactIdPrestaFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
            SELECT id_contact AS id_contact, mail_client AS mail_client,
            message_client AS message_client,
            id_personne AS id_personne
            FROM contact
            WHERE id_personne = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        // console.log(e);,
        throw e;
    } finally {
        client.release();
    }
}

//delete
const deleteContact = (id, callback) => {
    deleteContactFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteContactFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM contact
        WHERE id_contact = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getAllContactIdPresta,
    deleteContact
}