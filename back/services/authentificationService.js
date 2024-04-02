const pool = require("../database/db.js");

//get
const getPrestataireMailPassword = (mail, mdp, callback) => {
    getPrestataireMailPasswordFromAPI(mail, mdp).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getPrestataireMailPasswordFromAPI(mail, mdp){
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM personne
        WHERE mail_personne = $1
        AND mdp_personne = $2
        `;
        const result = await client.query(query, [mail, mdp]);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const adminVerif = (id, callback) => {
    adminVerifFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function adminVerifFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM personne
        INNER JOIN role ON personne.id_role = role.id_role
        WHERE id_personne = $1
        AND role.nom_role = 'Admin'
        `;
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

//put
const changePassword = (id, mdp, callback) => {
    changePasswordFromAPI(id, mdp).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function changePasswordFromAPI(id, mdp){
    console.log(id, mdp);
    const client = await pool.connect();
    try {
        const query = `
        UPDATE personne
        SET mdp_personne = $2
        WHERE id_personne = $1
        `;
        const result = await client.query(query, [id, mdp]);
        return result.rows[0];
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getPrestataireMailPassword,
    adminVerif,
    changePassword
}