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
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, emplacement.nom_emplacement AS nomStand
            FROM personne 
        INNER JOIN stand ON personne.id_personne = stand.id_personne
        INNER JOIN emplacement ON stand.id_emplacement = emplacement.id_emplacement
        WHERE stand.id_emplacement = $1
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
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, emplacement.nom_emplacement AS nomStand, 
            personne.id_personne AS idPresta FROM personne 
        INNER JOIN stand ON personne.id_personne = stand.id_personne
        INNER JOIN emplacement ON stand.id_emplacement = emplacement.id_emplacement
        WHERE stand.id_emplacement = $1
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

const getInfoPanelNoTake = (id,callback) => {
    getInfoPanelNoTakeFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getInfoPanelNoTakeFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT emplacement.nom_emplacement AS nomStand FROM emplacement
        WHERE emplacement.id_emplacement = $1
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

const getAllStandsTaken = (callback) => {
    getAllStandsTakenFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllStandsTakenFromAPI(){
    const client = await pool.connect();
    console.log("stands");
    try {
        const query = `
        SELECT id_emplacement FROM stand
        `;
        const result = await client.query(query);
        console.log("result", result.rows);
        return result.rows;
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

async function saveStandFromAPI(id_emplacement, id_prestataire){
    const client = await pool.connect();
    try {
        const query = `
        INSERT INTO stand (id_emplacement, id_personne)
        VALUES ($1, $2)
        `;
        const values = [id_emplacement, id_prestataire];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const updateStand = (id_emplacement, id_prestataire,callback) => {
    updateStandFromAPI(id_emplacement, id_prestataire).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateStandFromAPI(id_emplacement, id_prestataire){
    const client = await pool.connect();
    try {
        const query = `
        UPDATE stand
        SET id_personne = $2
        WHERE id_emplacement = $1
        `;
        const values = [id_emplacement, id_prestataire];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteStand = (id_emplacement,callback) => {
    deleteStandFromAPI(id_emplacement).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteStandFromAPI(id_emplacement){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM stand
        WHERE id_emplacement = $1
        `;
        const values = [id_emplacement];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}


module.exports = { 
    getInfobulle,
    getInfoPanel,
    getAllStandsTaken,
    saveStand,
    updateStand,
    deleteStand
};