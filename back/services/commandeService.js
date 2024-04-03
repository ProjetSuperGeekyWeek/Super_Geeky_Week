const pool = require("../database/db.js");

//get
const getCommande = (uuid_commande, callback) => {
    getCommandeFromAPI(uuid_commande).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getCommandeFromAPI(uuid_commande){
    const client = await pool.connect();
    try {
        const query = `
        SELECT acheter.consommer, item.nom_item FROM acheter
        JOIN item ON acheter.id_item = item.id_item
        WHERE id_qr_code = $1
        ORDER BY acheter.consommer, item.nom_item
        `;
        const result = await client.query(query, [uuid_commande]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getCommandePresta = (id_personne, uuid_commande, callback) => {
    getCommandePrestaFromAPI(id_personne, uuid_commande).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getCommandePrestaFromAPI(id_personne, uuid_commande){
    const client = await pool.connect();
    try {
        const query = `
        SELECT acheter.consommer, item.nom_item FROM acheter
        JOIN item ON acheter.id_item = item.id_item
        WHERE item.id_personne = $1 AND acheter.id_qr_code = $2
        ORDER BY acheter.consommer, item.nom_item
        `;
        const result = await client.query(query, [id_personne, uuid_commande]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}


//put
const validerLigneCommande = (id_acheter, callback) => {
    validerLigneCommandeFromAPI(id_acheter).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function validerLigneCommandeFromAPI(id_acheter){
    const client = await pool.connect();
    try {
        const query = `
        UPDATE acheter
        SET consommer = TRUE
        WHERE id_acheter = $1
        `;
        const result = await client.query(query, [id_acheter]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getCommande,
    getCommandePresta,
    validerLigneCommande
}