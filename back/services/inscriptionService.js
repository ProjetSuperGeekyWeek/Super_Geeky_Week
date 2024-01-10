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
        // console.log(e);,
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
            INNER JOIN jour ON jour.id_jour = calendrier.id_jour
            WHERE inscription_calendrier.id_inscription = $1
            ORDER BY jour.id_jour ASC, heure_debut ASC
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

const getAllInscritsIdInscription = (id, callback) => {
    getAllInscritsIdInscriptionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllInscritsIdInscriptionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
            SELECT inscrit.id_inscription AS id_activite, nom_inscrit AS nom, 
            prenom_inscrit AS prenom, description_inscrit AS description,
            horaire_debut AS heure_debut, horaire_fin AS heure_fin,
            jour.date_calendrier AS jour
            FROM inscrit
            INNER JOIN inscription ON inscription.id_inscription = inscrit.id_inscription
            INNER JOIN calendrier ON calendrier.id_calendrier = inscrit.id_calendrier
            INNER JOIN jour ON jour.id_jour = calendrier.id_jour
            WHERE inscrit.id_inscription = $1
            ORDER BY jour.id_jour ASC, heure_debut ASC
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

const getJours = (callback) => {
    getJoursFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getJoursFromAPI(){
    const client = await pool.connect();
    try {
        const query = `
        SELECT id_jour, date_calendrier AS jour
        FROM jour
        ORDER BY id_jour ASC
        `;
        const result = await client.query(query);
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

const postHoraire = (id, id_jour, heure_debut, heure_fin, callback) => {
    postHoraireFromAPI(id, id_jour, heure_debut, heure_fin).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function postHoraireFromAPI(id, id_jour, heure_debut, heure_fin){
    const client = await pool.connect();
    try {
        const query = `
        SELECT id_calendrier
        FROM calendrier
        WHERE id_jour = $1
        AND horaire_debut = $2
        AND horaire_fin = $3
        `;
        var calendrier = await client.query(query, [id_jour, heure_debut, heure_fin]);
        if(calendrier.rows[0] === undefined){
            const query2 = `
            INSERT INTO calendrier (id_jour, horaire_debut, horaire_fin)
            VALUES ($1, $2, $3)
            RETURNING id_calendrier
            `;
            const insert = await client.query(query2, [id_jour, heure_debut, heure_fin]);
            calendrier = await client.query(query, [id_jour, heure_debut, heure_fin]);
        }
        const query4 = `
        INSERT INTO inscription_calendrier (id_inscription, id_calendrier)
        VALUES ($1, $2)
        `;
        const result = await client.query(query4, [id, calendrier.rows[0].id_calendrier]);
        return result.rows;
    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        client.release();
    }
}

//put
const putInscription = (id, titre, description, nb_place, callback) => {
    putInscriptionFromAPI(id, titre, description, nb_place).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function putInscriptionFromAPI(id, titre, description, nb_place){
    const client = await pool.connect();
    try {
        const query = `
        UPDATE inscription
        SET nom_inscription = $2, description_inscription = $3, nb_place = $4
        WHERE id_inscription = $1
        `;
        const result = await client.query(query, [id, titre, description, nb_place]);
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

const deleteHoraire = (id, id_calendrier, callback) => {
    deleteHoraireFromAPI(id, id_calendrier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteHoraireFromAPI(id, id_calendrier){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM inscription_calendrier
        WHERE id_inscription = $1
        AND id_calendrier = $2
        `;
        const result = await client.query(query, [id, id_calendrier]);
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
    getAllInscritsIdInscription,
    getJours,
    postInscrit,
    postHoraire,
    putInscription,
    deleteInscrit,
    deleteHoraire
};