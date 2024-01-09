const pool = require("../../database/db.js");

const getAllPersonne = (callback) => {
    getAllPersonneFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPersonneFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM personne`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllPersonneColumn = (callback) => {
    getAllPersonneColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPersonneColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'personne'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewPersonne = (body, callback) => {
    addNewPersonneFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewPersonneFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO personne (nom_personne,prenom_personne,mail_personne,mdp_personne,image_personne,description_personne,id_role) VALUES ($1,$2,$3,$4,$5,$6,$7)', [body.nom_personne,body.prenom_personne,body.mail_personne,body.mdp_personne,body.image_personne,body.description_personne,body.id_role]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPersonne:getAllPersonne,
    getAllPersonneColumn:getAllPersonneColumn,
    addNewPersonne:addNewPersonne,
};