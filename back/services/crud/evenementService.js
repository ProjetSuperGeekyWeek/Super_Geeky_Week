const pool = require("../../database/db.js");

const getAllEvenement = (callback) => {
    getAllEvenementFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM evenement`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllEvenementColumn = (callback) => {
    getAllEvenementColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'evenement'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewEvenement = (body, callback) => {
    addNewEvenementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewEvenementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO evenement (nom_evenement,description_evenement,nb_place,image_evenement,id_personne,id_emplacement) VALUES ($1,$2,$3,$4,$5,$6)', [body.nom_evenement,body.description_evenement,body.nb_place,body.image_evenement,body.id_personne,body.id_emplacement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEvenement:getAllEvenement,
    getAllEvenementColumn:getAllEvenementColumn,
    addNewEvenement:addNewEvenement,
};