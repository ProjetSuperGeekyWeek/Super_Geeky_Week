const pool = require("../database/db.js");

//get
const getIdSession = (uuid, callback) => {
    getIdSessionFromAPI(uuid, time).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getIdSessionFromAPI(uuid){
    const client = await pool.connect();
    try {
        const query = `
        SELECT id_session FROM session
        WHERE uuid_session = $1
        AND date_session > NOW() - INTERVAL '24 hours'
        `;
        const result = await client.query(query, [uuid]);
        console.log("getId")
        console.log(result.rows);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getSessionById = (id, callback) => {
    getSessionByIdFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getSessionByIdFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT * FROM session
        WHERE id_session = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAuthentifierSession = (id, callback) => {
    getAuthentifierSessionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAuthentifierSessionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT authentifier FROM session_personne
        INNER JOIN session ON session.id_session = session_personne.id_session
        WHERE session.id_session = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const getAdminSession = (id, callback) => {
    getAdminSessionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function getAdminSessionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        SELECT authentifier FROM session_personne
        INNER JOIN session ON session.id_session = session_personne.id_session
        INNER JOIN personne ON personne.id_personne = session_personne.id_personne
        INNER JOIN role ON role.id_role = personne.id_role
        WHERE session.id_session = $1
        AND role.nom_role = 'admin'
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

//post

const createSession = (uuid, callback) => {
    createSessionFromAPI(uuid).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function createSessionFromAPI(uuid){
    const client = await pool.connect();
    try {
        const query = `
        INSERT INTO session (uuid_session, date_session)
        VALUES ($1, NOW())
        RETURNING id_session
        `;
        const result = await client.query(query, [uuid]);
        // console.log("create")
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const linkSessionPresta = (idSession, idPresta, callback) => {
    linkSessionPrestaFromAPI(idSession, idPresta).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function linkSessionPrestaFromAPI(idSession, idPresta){
    const client = await pool.connect();
    try {
        const query = `
        INSERT INTO session_personne (id_session, id_prestataire, authentifier)
        VALUES ($1, $2, true)
        `;
        const result = await client.query(query, [idSession, idPresta]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

//put

const updateSession = (id, callback) => {
    updateSessionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateSessionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        UPDATE session
        SET date_session = NOW()
        WHERE id_session = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

//delete

const cleanSession = (callback) => {
    cleanSessionFromAPI().then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function cleanSessionFromAPI(){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM session
        WHERE date_session < NOW() - INTERVAL '24 hours'
        `;
        const result = await client.query(query);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const logoutSession = (id, callback) => {
    logoutSessionFromAPI(id).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function logoutSessionFromAPI(id){
    const client = await pool.connect();
    try {
        const query = `
        DELETE FROM session
        WHERE id_session = $1
        `;
        const result = await client.query(query, [id]);
        return result.rows;
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}


module.exports = {
    getIdSession,
    getSessionById,
    getAuthentifierSession,
    getAdminSession,
    createSession,
    linkSessionPresta,
    updateSession,
    cleanSession,
    logoutSession
}