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

module.exports = {
    getAllItem:getAllItem,
    getAllItemColumn:getAllItemColumn,
    addNewItem:addNewItem,
};