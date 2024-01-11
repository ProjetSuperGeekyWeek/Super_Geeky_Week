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

const deletePersonneById = (id_personne, callback) => {
    deletePersonneByIdFromAPI(id_personne).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deletePersonneByIdFromAPI(id_personne){
    const client = await pool.connect();
    try {
        let query2 = "SELECT * FROM personne WHERE id_personne=$1";
        let resultPersonne = await client.query(query2, [id_personne]);

        let query = "SELECT * FROM personne WHERE nom_personne LIKE 'default_PERSONNE' AND id_role=$1";
        let resultVerif = await client.query(query, [resultPersonne.rows[0].id_role]);
        console.log(resultPersonne.rows, 'P')
        console.log(resultVerif.rows, 'V')
        if(resultVerif.rowCount !== 1) {
            query = "INSERT INTO personne (nom_personne,prenom_personne,mail_personne,mdp_personne,image_personne,description_personne,id_role) VALUES ('default_PERSONNE','default_PERSONNE','default@personne.dp','df','default', 'je suis une personne qui a etait suprimmer',$1)"
            await client.query(query, [resultPersonne.rows[0].id_role])
            await client.query('COMMIT');
            query = "SELECT * FROM personne WHERE nom_personne LIKE 'default_PERSONNE' AND id_role=$1";
            resultVerif = await client.query(query, [resultPersonne.rows[0].id_role]);
        }
        await client.query('UPDATE contact SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE evenement SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE personne_tag SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE item SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE stand SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE inscription SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('UPDATE Livre_d_or SET id_personne=$1 WHERE id_personne=$2', [resultVerif.rows[0].id_personne,id_personne]);
        await client.query('COMMIT');
        await client.query('DELETE FROM personne WHERE id_personne=$1', [id_personne]);
        await client.query('COMMIT');
    } catch (e) {
        console.log(e,"erreur")
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updatePersonne = (body, callback) => {
    updatePersonneFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updatePersonneFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE personne SET nom_personne=$1,prenom_personne=$2,mail_personne=$3,mdp_personne=$4,image_personne=$5,description_personne=$6,id_role=$7 WHERE id_personne=$8'
            , [body.nom_personne,body.prenom_personne,body.mail_personne,body.mdp_personne,body.image_personne,body.description_personne,body.id_role,body.id_personne]);
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
    deletePersonneById:deletePersonneById,
    updatePersonne:updatePersonne,
};