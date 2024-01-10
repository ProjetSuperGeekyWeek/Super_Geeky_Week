const pool = require("../database/db.js");

//get
const getAllTemoignage = async (callback) => {
    try {
        const res = await getAllTemoignageFromAPI();
        callback(null, res);
    } catch (error) {
        callback(error, null);
    }
}

async function getAllTemoignageFromAPI() {
    console.log("getTemoignageFromAPI");
    const client = await pool.connect();
    
    try {
        const query = "SELECT * FROM Livre_d_or";
        const result = await client.query(query);
        console.log("Query result:", result.rows);  
        return result.rows;
    } catch (e) {
        console.error("Error in getTemoignageFromAPI:", e); 
        throw e;
    } finally {
        client.release();
    }
}

const getTemoignageByIdPresta = async (id, callback) => {
    try {
        const res = await getTemoignageByIdFromAPI(id);
        callback(null, res);
    } catch (error) {
        callback(error, null);
    }
}

async function getTemoignageByIdPrestaFromAPI(id) {
    console.log("getTemoignageByIdFromAPI");
    const client = await pool.connect();
    
    try {
        const query = `
        SELECT id_temoignage AS id_temoignage, temoignage, pseudo
        FROM livre_d_or
        INNER JOIN livre_personne ON livre_d_or.id_temoignage = livre_personne.id_temoignage
        WHERE livre_personne.id_personne = $1
        `;
        const result = await client.query(query, [id]);
        console.log("Query result:", result.rows);  
        return result.rows;
    } catch (e) {
        console.error("Error in getTemoignageByIdFromAPI:", e); 
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getAllTemoignage,
    getTemoignageByIdPresta
};
