const pool = require("../../database/db.js");

const getAllPanier = (callback) => {
    getAllPanierFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPanierFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM panier`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllPanierColumn = (callback) => {
    getAllPanierColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllPanierColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'panier'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewPanier = (body, callback) => {
    addNewPanierFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewPanierFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO panier (nom_panier) VALUES ($1)', [body.nom_panier]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deletePanierById = (id_panier, callback) => {
    deletePanierByIdFromAPI(id_panier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deletePanierByIdFromAPI(id_panier){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM panier WHERE nom_panier LIKE 'default_PANIER'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO panier (nom_panier) VALUES ('default_PANIER')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM panier WHERE nom_panier LIKE 'default_PANIER'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_panier;
            await client.query('UPDATE ligne_panier SET id_panier=$1 WHERE id_panier = $2', [idDefault,id_panier])
        }else{
            const idDefault = result.rows[0].id_panier;
            query = "SELECT * FROM ligne_panier";
            let ligne_panier = await client.query(query);
            let tabLigneUse = [];
            for (const row of ligne_panier.rows) {
                if(row.id_panier == id_panier){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of ligne_panier.rows){
                        if(row.id_item === row2.id_item && row2.id_panier === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM ligne_panier WHERE id_item=$1 AND id_panier=$2', [row.id_item,row.id_panier]);
                    }else{
                        await client.query('UPDATE ligne_panier SET id_panier=$1 WHERE id_item=$2 AND id_panier=$3', [idDefault,row.id_item,row.id_panier])
                    }
                }
            }
        }
        query = "DELETE FROM panier WHERE id_panier=$1"
        await client.query(query, [id_panier])
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updatePanier = (body, callback) => {
    updatePanierFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updatePanierFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE panier SET nom_panier=$1 WHERE id_panier=$2', [body.nom_panier,body.id_panier]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllPanier:getAllPanier,
    getAllPanierColumn:getAllPanierColumn,
    addNewPanier:addNewPanier,
    deletePanierById:deletePanierById,
    updatePanier:updatePanier,
};