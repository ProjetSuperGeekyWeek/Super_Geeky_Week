const pool = require("../../database/db.js");

const getAllTag = (callback) => {
    getAllTagFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllTagFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM tag`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllTagColumn = (callback) => {
    getAllTagColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllTagColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'tag'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewTag = (body, callback) => {
    addNewTagFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewTagFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO tag (nom_tag) VALUES ($1)', [body.nom_tag]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllTag:getAllTag,
    getAllTagColumn:getAllTagColumn,
    addNewTag:addNewTag,
};