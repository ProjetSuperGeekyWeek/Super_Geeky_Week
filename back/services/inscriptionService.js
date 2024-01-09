const pool = require("../database/db.js");

//get
const getAllInscriptionsIdPresta = (id, callback) => {
    getAllInscriptionsIdPrestaFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllInscriptionsIdPrestaFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT id_inscription AS id_activite, nom_inscription AS titre,
            description_inscription AS description, nb_place AS nb_place, 
            image_inscription AS image
            FROM inscription
            WHERE id_personne = $1
            ORDER BY id_activite ASC
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

const getAllHorairesIdInscription = (id, callback) => {
    getAllHorairesIdInscriptionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllHorairesIdInscriptionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
            SELECT calendrier.id_calendrier AS id_calendrier,
            horaire_debut AS heure_debut, horaire_fin AS heure_fin,
            jour.date_calendrier AS jour
            FROM calendrier
            INNER JOIN inscription_calendrier ON inscription_calendrier.id_calendrier = calendrier.id_calendrier
            WHERE inscription_calendrier.id_inscription = $1
            ORDER BY jour ASC, heure_debut ASC
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

//post
const postInscrit = (id, nom, prenom, description,id_calendrier, callback) => {
    postInscritFromAPI(id, nom, prenom, description,id_calendrier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function postInscritFromAPI(id, nom, prenom, description,id_calendrier){
    const client = await pool.connect();
    try {
        const query = `
        INSERT INTO inscrit (id_inscription, nom_inscrit, prenom_inscrit, description_inscrit,id_calendrier)
        VALUES ($1, $2, $3, $4, $5)
        `;
        const result = await client.query(query, [id, nom, prenom, description,id_calendrier]);
        return result.rows;
    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        client.release();
    }
}

//delete
const deleteInscrit = (id, nom, prenom,id_calendrier, callback) => {
    deleteInscritFromAPI(id, nom, prenom,id_calendrier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteInscritFromAPI(id, nom, prenom,id_calendrier){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM inscrit
        WHERE id_inscription = $1
        AND nom_inscrit = $2
        AND prenom_inscrit = $3
        AND id_calendrier = $4
        `;
        const result = await client.query(query, [id, nom, prenom,id_calendrier]);
        return result.rows;
    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getAllInscriptionsIdPresta,
    getAllHorairesIdInscription,
    postInscrit,
    deleteInscrit
};