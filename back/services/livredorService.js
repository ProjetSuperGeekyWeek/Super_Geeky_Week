const pool = require("../database/db.js");

//get
const getTemoignage = async (callback) => {
    try {
        const res = await getTemoignageFromAPI();
        callback(null, res);
    } catch (error) {
        callback(error, null);
    }
}

async function getTemoignageFromAPI() {
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


module.exports = {
    getTemoignage
};
