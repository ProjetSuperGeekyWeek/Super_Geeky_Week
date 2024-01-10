const pool = require("../../database/db.js");

const getAllItem = (callback) => {
    getAllItemFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllItemFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM item`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllItemColumn = (callback) => {
    getAllItemColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllItemColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'item'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewItem = (body, callback) => {
    addNewItemFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewItemFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO item (nom_item,stock_item,prix_item,image_item,description_item,id_personne,id_calendrier) VALUES ($1,$2,$3,$4,$5,$6,$7)', [body.nom_item,body.stock_item,body.prix_item,body.image_item,body.description_item,body.id_personne,body.id_calendrier]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteItemById = (id_item,id_personne,id_calendrier, callback) => {
    deleteItemByIdFromAPI(id_item,id_personne,id_calendrier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteItemByIdFromAPI(id_item,id_personne,id_calendrier){
    console.log(id_item,id_personne,id_calendrier)
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM item WHERE nom_item LIKE 'default_item' AND id_personne=$1 AND id_calendrier=$2";
        let result = await client.query(query, [id_personne, id_calendrier]);
        await console.log(result.rows, 3333)
        if(result.rowCount !== 1) {
            query = "INSERT INTO item (nom_item,stock_item,prix_item,image_item,description_item,id_personne,id_calendrier) VALUES ('default_item',0,0,'default','cet item est un item par defaut', $1, $2)"
            await client.query(query, [id_personne, id_calendrier])
            await client.query('COMMIT');
            query = "SELECT * FROM item WHERE nom_item LIKE 'default_item' AND id_personne=$1 AND id_calendrier=$2";
            result = await client.query(query, [id_personne, id_calendrier]);
        }
        await console.log(result.rows, 4444)
        await client.query('UPDATE acheter SET id_item=$1 WHERE id_item=$2', [result.rows[0].id_item,id_item])
        await client.query('UPDATE ligne_panier SET id_item=$1 WHERE id_item=$2', [result.rows[0].id_item,id_item])
        await client.query('DELETE FROM item WHERE id_item=$1', [id_item]);
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updateItem = (body, callback) => {
    updateItemFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateItemFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE item SET nom_item=$1,stock_item=$2,prix_item=$3,image_item=$4,description_item=$5,id_personne=$6,id_calendrier=$7 WHERE id_item=$8'
            , [body.nom_item,body.stock_item,body.prix_item,body.image_item,body.description_item,body.id_personne,body.id_calendrier,body.id_item]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllItem:getAllItem,
    getAllItemColumn:getAllItemColumn,
    addNewItem:addNewItem,
    deleteItemById:deleteItemById,
    updateItem:updateItem,
};