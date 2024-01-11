const pool = require("../../database/db.js");

const getAllEvenement = (callback) => {
    getAllEvenementFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM evenement`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllEvenementColumn = (callback) => {
    getAllEvenementColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEvenementColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'evenement'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewEvenement = (body, callback) => {
    addNewEvenementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewEvenementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO evenement (nom_evenement,description_evenement,nb_place,image_evenement,id_personne,id_emplacement) VALUES ($1,$2,$3,$4,$5,$6)', [body.nom_evenement,body.description_evenement,body.nb_place,body.image_evenement,body.id_personne,body.id_emplacement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteEvenementById = (id_evenement, callback) => {
    deleteEvenementByIdFromAPI(id_evenement).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteEvenementByIdFromAPI(id_evenement){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM evenement WHERE id_evenement=$1";
        let result_evenement = await client.query(query, [id_evenement]);
        query = "SELECT * FROM evenement WHERE nom_evenement LIKE 'default_EVENEMENT'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO evenement (nom_evenement,description_evenement,nb_place,image_evenement,id_personne,id_emplacement) VALUES ('default_EVENEMENT','dE',0,'default',$1,$2)"
            await client.query(query, [result_evenement.rows[0].id_personne, result_evenement.rows[0].id_evenement])
            await client.query('COMMIT');
            query = "SELECT * FROM evenement WHERE nom_evenement LIKE 'default_EVENEMENT'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_evenement;id_emplacement
            await client.query('UPDATE creneau SET id_evenement=$1 WHERE id_evenement = $2', [idDefault,id_evenement])
        }else{
            const idDefault = result.rows[0].id_evenement;
            query = "SELECT * FROM creneau";
            let creneau = await client.query(query);
            let tabLigneUse = [];
            for (const row of creneau.rows) {
                if(row.id_evenement == id_evenement){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of creneau.rows){
                        if(row.id_calendrier === row2.id_calendrier && row2.id_evenement === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM creneau WHERE id_evenement=$1 AND id_calendrier=$2', [row.id_evenement,row.id_calendrier]);
                    }else{
                        await client.query('UPDATE creneau SET id_evenement=$1 WHERE id_evenement=$2 AND id_calendrier=$3', [idDefault,row.id_evenement,row.id_calendrier])
                    }
                }
            }
        }
        query = "DELETE FROM evenement WHERE id_evenement=$1"
        await client.query(query, [id_evenement])
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updateEvenement = (body, callback) => {
    updateEvenementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateEvenementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE evenement SET nom_evenement=$1,description_evenement=$2,nb_place=$3,image_evenement=$4,id_personne=$5,id_emplacement=$6 WHERE id_evenement=$7'
            , [body.nom_evenement,body.description_evenement,body.nb_place,body.image_evenement,body.id_personne,body.id_emplacement,body.id_evenement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEvenement:getAllEvenement,
    getAllEvenementColumn:getAllEvenementColumn,
    addNewEvenement:addNewEvenement,
    deleteEvenementById:deleteEvenementById,
    updateEvenement:updateEvenement,
};