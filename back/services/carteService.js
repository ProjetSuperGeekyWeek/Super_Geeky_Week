const pool = require("../database/db.js");

const getInfobulle = (id,callback) => {
    getInfobulleFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getInfobulleFromAPI(id){
    console.log("id", id);
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM personne 
        INNER JOIN associer_a ON personne.id_personne = associer_a.id_personne
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await client.query(query, values);
        console.log("nom", result.rows[0].nom);
        return result.rows[0];
    } catch (e) {
        console.log("e", e);
        throw e;
    } finally {
        client.release();
    }
}

const getInfoPanel = (id,callback) => {
    getInfoPanelFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getInfoPanelFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM personne 
        INNER JOIN associer_a ON personne.id_personne = associer_a.id_personne
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const saveStand = (id, id_prestataire,callback) => {
    saveStandFromAPI(id, id_prestataire).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function saveStandFromAPI(id, id_prestataire){
    const client = await pool.connect();
    try {
        const query = `
        INSERT INTO associer_a (id_stand, id_personne)
        VALUES ($1, $2)
        `;
        const values = [id, id_prestataire];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const updateStand = (id, id_prestataire,callback) => {
    updateStandFromAPI(id, id_prestataire).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateStandFromAPI(id, id_prestataire){
    const client = await pool.connect();
    try {
        const query = `
        UPDATE associer_a
        SET id_personne = $2
        WHERE id_stand = $1
        `;
        const values = [id, id_prestataire];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteStand = (id,callback) => {
    deleteStandFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteStandFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM associer_a
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}


module.exports = { 
    getInfobulle,
    getInfoPanel,
    saveStand,
    updateStand,
    deleteStand
};