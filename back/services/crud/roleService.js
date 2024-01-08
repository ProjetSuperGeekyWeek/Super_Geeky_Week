const pool = require("../../database/db.js");

const getAllRole = (callback) => {
    getAllRoleFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllRoleFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM role`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllRoleColumn = (callback) => {
    getAllRoleColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllRoleColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'role'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewRole = (nom_role, callback) => {
    addNewRoleFromAPI(nom_role).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewRoleFromAPI(nom_role){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO role (nom_role) VALUES ($1)', [nom_role]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllRole:getAllRole,
    getAllRoleColumn:getAllRoleColumn,
    addNewRole:addNewRole,
};