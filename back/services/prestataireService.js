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
            image_personne AS image, emplacement.nom_emplacement AS nomStand, 
            personne.id_personne AS idPresta FROM personne 
        INNER JOIN stand ON personne.id_personne = stand.id_personne
        INNER JOIN emplacement ON stand.id_emplacement = emplacement.id_emplacement
        `;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPrestataires
};