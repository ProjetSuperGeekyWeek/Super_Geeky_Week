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
            image_personne AS image, personne.id_personne AS idPresta 
            FROM personne 
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