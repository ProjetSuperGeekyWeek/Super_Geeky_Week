const pool = require("../../database/db.js");

const getAllRessource = (callback) => {
    getAllRessourceFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllRessourceFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM ressource`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllRessourceColumn = (callback) => {
    getAllRessourceColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllRessourceColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'ressource'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewRessource = (body, callback) => {
    addNewRessourceFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewRessourceFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO ressource (nom_ressource) VALUES ($1)', [body.nom_ressource]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteRessourceById = (id_ressource, callback) => {
    deleteRessourceByIdFromAPI(id_ressource).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteRessourceByIdFromAPI(id_ressource){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM ressource WHERE nom_ressource LIKE 'default_RESSOURCE'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO ressource (nom_ressource) VALUES ('default_RESSOURCE')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM ressource WHERE nom_ressource LIKE 'default_RESSOURCE'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_ressource;
            await client.query('UPDATE emplacement_ressource SET id_ressource=$1 WHERE id_ressource = $2', [idDefault,id_ressource])
        }else{
            const idDefault = result.rows[0].id_ressource;
            query = "SELECT * FROM emplacement_ressource";
            let emplacement_ressource = await client.query(query);
            let tabLigneUse = [];
            for (const row of emplacement_ressource.rows) {
                if(row.id_ressource == id_ressource){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of emplacement_ressource.rows){
                        if(row.id_emplacement === row2.id_emplacement && row2.id_ressource === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM emplacement_ressource WHERE id_emplacement=$1 AND id_ressource=$2', [row.id_emplacement,row.id_ressource]);
                    }else{
                        await client.query('UPDATE emplacement_ressource SET id_ressource=$1 WHERE id_emplacement=$2 AND id_ressource=$3', [idDefault,row.id_emplacement,row.id_ressource])
                    }
                }
            }
        }
        query = "DELETE FROM ressource WHERE id_ressource=$1"
        await client.query(query, [id_ressource])
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllRessource:getAllRessource,
    getAllRessourceColumn:getAllRessourceColumn,
    addNewRessource:addNewRessource,
    deleteRessourceById:deleteRessourceById,
};