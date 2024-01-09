const pool = require("../database/db.js");

//get
const getTemoignage = (callback) => {
    getTemoignageFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getTemoignageFromAPI(){
    console.log("getTemoignageFromAPI");
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM Livre_d_or
        `;
        const result = await client.query(query);
        return result.rows;
    }catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getTemoignage
}
