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
        await client.query('INSERT INTO calendrier (date_calendrier,horaire_debut,horaire_fin) VALUES ($1,$2,$3)', [body.date_calendrier,body.horaire_debut,body.horaire_fin]);
        // Corrected the commit command
        await client.query('COMMIT');
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

const deleteCalendrierById = (id_calendrier, callback) => {
    deleteCalendrierByIdFromAPI(id_calendrier).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteCalendrierByIdFromAPI(id_calendrier){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM calendrier WHERE libelle_calendrier LIKE 'default_CALENDRIER'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO calendrier (libelle_calendrier,date_calendrier,horaire_debut,horaire_fin) VALUES ('default_CALENDRIER','2024-01-01', '00:00', '00:00')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM calendrier WHERE libelle_calendrier LIKE 'default_CALENDRIER'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_calendrier;
            await client.query('UPDATE emplacement_ressource SET id_calendrier=$1 WHERE id_calendrier = $2', [idDefault,id_calendrier])
            await client.query('UPDATE stand SET id_calendrier=$1 WHERE id_calendrier = $2', [idDefault,id_calendrier])
        }else{
            let idDefault = result.rows[0].id_emplacement;
            query = "SELECT * FROM emplacement_ressource";
            let emplacement_ressource = await client.query(query);
            let tabLigneUse = [];
            for (const row of emplacement_ressource.rows) {
                if(row.id_emplacement == id_calendrier){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of emplacement_ressource.rows){
                        if(row.id_ressource === row2.id_ressource && row2.id_emplacement === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM emplacement_ressource WHERE id_calendrier=$1 AND id_ressource=$2', [row.id_emplacement,row.id_ressource]);
                    }else{
                        await client.query('UPDATE emplacement_ressource SET id_calendrier=$1 WHERE id_calendrier=$2 AND id_ressource=$3', [idDefault,row.id_emplacement,row.id_ressource])
                    }
                }
            }

            query = "SELECT * FROM stand";
            let stand = await client.query(query);
            tabLigneUse = [];
            for (const row of stand.rows) {
                if(row.id_emplacement == id_calendrier){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of stand.rows){
                        if(row.id_ressource === row2.id_ressource && row2.id_emplacement === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM stand WHERE id_calendrier=$1 AND id_personne=$2', [row.id_emplacement,row.id_personne]);
                    }else{
                        await client.query('UPDATE stand SET id_calendrier=$1 WHERE id_calendrier=$2 AND id_personne=$3', [idDefault,row.id_emplacement,row.id_personne])
                    }
                }
            }
        }
        await client.query('UPDATE evenement SET id_calendrier=$1 WHERE id_calendrier = $2', [result.rows[0].id_emplacement,id_calendrier])
        query = "DELETE FROM emplacement WHERE id_calendrier=$1"
        await client.query(query, [id_calendrier])
        await client.query('COMMIT');
    } catch (e) {
        console.log(e)
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllCalendrier:getAllCalendrier,
    getAllCalendrierColumn:getAllCalendrierColumn,
    addNewCalendrier:addNewCalendrier,
    deleteCalendrierById:deleteCalendrierById,
};