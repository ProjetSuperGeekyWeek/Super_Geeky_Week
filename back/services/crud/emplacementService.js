const pool = require("../../database/db.js");

const getAllEmplacement = (callback) => {
    getAllEmplacementFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM emplacement`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllEmplacementColumn = (callback) => {
    getAllEmplacementColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllEmplacementColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'emplacement'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewEmplacement = (body, callback) => {
    addNewEmplacementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewEmplacementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO emplacement (nom_emplacement) VALUES ($1)', [body.nom_emplacement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteEmplacementById = (id_emplacement, callback) => {
    deleteEmplacementByIdFromAPI(id_emplacement).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteEmplacementByIdFromAPI(id_emplacement){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM emplacement WHERE nom_emplacement LIKE 'default_EMPLACEMENT'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO emplacement (nom_emplacement) VALUES ('default_EMPLACEMENT')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM emplacement WHERE nom_emplacement LIKE 'default_EMPLACEMENT'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_emplacement;
            await client.query('UPDATE emplacement_ressource SET id_emplacement=$1 WHERE id_emplacement = $2', [idDefault,id_emplacement])
            await client.query('UPDATE stand SET id_emplacement=$1 WHERE id_emplacement = $2', [idDefault,id_emplacement])
        }else{
            let idDefault = result.rows[0].id_emplacement;
            query = "SELECT * FROM emplacement_ressource";
            let emplacement_ressource = await client.query(query);
            let tabLigneUse = [];
            for (const row of emplacement_ressource.rows) {
                if(row.id_emplacement == id_emplacement){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of emplacement_ressource.rows){
                        if(row.id_ressource === row2.id_ressource && row2.id_emplacement === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM emplacement_ressource WHERE id_emplacement=$1 AND id_ressource=$2', [row.id_emplacement,row.id_ressource]);
                    }else{
                        await client.query('UPDATE emplacement_ressource SET id_emplacement=$1 WHERE id_emplacement=$2 AND id_ressource=$3', [idDefault,row.id_emplacement,row.id_ressource])
                    }
                }
            }

            query = "SELECT * FROM stand";
            let stand = await client.query(query);
            tabLigneUse = [];
            for (const row of stand.rows) {
                if(row.id_emplacement == id_emplacement){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of stand.rows){
                        if(row.id_ressource === row2.id_ressource && row2.id_emplacement === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM stand WHERE id_emplacement=$1 AND id_personne=$2', [row.id_emplacement,row.id_personne]);
                    }else{
                        await client.query('UPDATE stand SET id_emplacement=$1 WHERE id_emplacement=$2 AND id_personne=$3', [idDefault,row.id_emplacement,row.id_personne])
                    }
                }
            }
        }
        await client.query('UPDATE evenement SET id_emplacement=$1 WHERE id_emplacement = $2', [result.rows[0].id_emplacement,id_emplacement])
        query = "DELETE FROM emplacement WHERE id_emplacement=$1"
        await client.query(query, [id_emplacement])
        await client.query('COMMIT');
    } catch (e) {
        console.log(e)
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updateEmplacement = (body, callback) => {
    updateEmplacementFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateEmplacementFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE emplacement SET nom_emplacement=$1 WHERE id_emplacement=$2', [body.nom_emplacement,body.id_emplacement]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEmplacement:getAllEmplacement,
    getAllEmplacementColumn:getAllEmplacementColumn,
    addNewEmplacement:addNewEmplacement,
    deleteEmplacementById:deleteEmplacementById,
    updateEmplacement:updateEmplacement,
};