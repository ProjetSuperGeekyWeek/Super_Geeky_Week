const pool = require("../../database/db.js");

const getAllCalendrier = (callback) => {
    getAllCalendrierFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCalendrierFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT * FROM calendrier`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAllCalendrierColumn = (callback) => {
    getAllCalendrierColumnFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAllCalendrierColumnFromAPI(){
    const client = await pool.connect();
    try {
        const query = `SELECT column_name FROM information_schema.columns WHERE table_name = 'calendrier'`;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const addNewCalendrier = (body, callback) => {
    addNewCalendrierFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function addNewCalendrierFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO calendrier (id_jour,horaire_debut,horaire_fin) VALUES ($1,$2,$3)', [body.id_jour,body.horaire_debut,body.horaire_fin]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const updateCalendrier = (body, callback) => {
    updateCalendrierFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateCalendrierFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE calendrier SET id_jour=$1,horaire_debut=$2,horaire_fin=$3 WHERE id_calendrier=$4'
            , [body.id_jour,body.horaire_debut,body.horaire_fin,body.id_calendrier]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllCalendrier:getAllCalendrier,
    getAllCalendrierColumn:getAllCalendrierColumn,
    addNewCalendrier:addNewCalendrier,
    updateCalendrier:updateCalendrier,
};