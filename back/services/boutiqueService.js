const pool = require("../database/db.js");

const getAllItems = (callback) => {
    getAllItemsFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllItemsFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT i.id_item,i.nom_item,i.stock_item,i.prix_item,i.image_item,i.description_item,i.id_personne,i.id_jour
                       FROM item i
                       ORDER BY i.id_personne, i.id_jour`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllItems:getAllItems,
};