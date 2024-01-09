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

const addNewRole = (body, callback) => {
    addNewRoleFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewRoleFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO role (nom_role) VALUES ($1)', [body.nom_role]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteRoleById = (id_role, callback) => {
    deleteRoleByIdFromAPI(id_role).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteRoleByIdFromAPI(id_role){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM role WHERE nom_role LIKE 'default_ROLE'";
        let result = await client.query(query);
        if(result.rowCount !== 1) {
            query = "INSERT INTO role (nom_role) VALUES ('default_ROLE')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM role WHERE nom_role LIKE 'default_ROLE'";
            result = await client.query(query);
        }
        await client.query('UPDATE personne SET id_role=$1 WHERE id_role=$2', [result.rows[0].id_role,id_role]);
        await client.query('COMMIT');
        await client.query('DELETE FROM role WHERE id_role=$1', [id_role]);
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllRole:getAllRole,
    getAllRoleColumn:getAllRoleColumn,
    addNewRole:addNewRole,
    deleteRoleById:deleteRoleById,
};