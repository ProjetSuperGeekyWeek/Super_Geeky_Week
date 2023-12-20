const pool = require("../database/db.js");

const getAllPrestataires = (callback) => {
    getAllPrestatairesFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPrestatairesFromAPI(){
    const client = await pool.connect();
    try {
        const query = `
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, personne.id_personne AS idPresta, 
            description_personne AS description
            FROM personne
        ORDER BY nom_personne ASC, prenom_personne ASC
        `;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getPrestataireById = (id, callback) => {
    getPrestataireByIdFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getPrestataireByIdFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, personne.id_personne AS idPresta,
            mail_personne AS mail, mdp_personne AS mdp, 
            description_personne AS description
            FROM personne 
        WHERE id_personne = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getPrestataireByNom = (nom, callback) => {
    getPrestataireByNomFromAPI(nom).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getPrestataireByNomFromAPI(nom){
    const client = await pool.connect();
    try {
        const query = `
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, personne.id_personne AS idPresta,
            mail_personne AS mail, mdp_personne AS mdp, 
            description_personne AS description
            FROM personne
        WHERE nom_personne LIKE $1
        ORDER BY nom_personne ASC, prenom_personne ASC
        `;
        var filtreNom = '%'.concat(nom.concat('%'))
        const result = await client.query(query, [filtreNom]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getPrestataireByTag = (tag, callback) => {
    getPrestataireByTagFromAPI(tag).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getPrestataireByTagFromAPI(tag){
    const client = await pool.connect();
    try {
        const query = `
        SELECT nom_personne AS nom, prenom_personne AS prenom,
            image_personne AS image, personne.id_personne AS idPresta,
            mail_personne AS mail, mdp_personne AS mdp, 
            description_personne AS description
            FROM personne
        INNER JOIN personne_tag ON personne.id_personne = personne_tag.id_personne
        WHERE personne_tag.id_tag = $1
        ORDER BY nom_personne ASC, prenom_personne ASC
        `;
        const result = await client.query(query, [tag]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getPrestataireTags = (id, callback) => {
    getPrestataireTagsFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getPrestataireTagsFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT tag.nom_tag AS nom_tag, tag.id_tag AS idTag
            FROM tag
        INNER JOIN personne_tag ON tag.id_tag = personne_tag.id_tag
        WHERE personne_tag.id_personne = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPrestataires,
    getPrestataireById,
    getPrestataireByNom,
    getPrestataireByTag,
    getPrestataireTags
};