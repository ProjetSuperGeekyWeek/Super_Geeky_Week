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

const deleteTagById = (id_tag, callback) => {
    deleteTagByIdFromAPI(id_tag).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function deleteTagByIdFromAPI(id_tag){
    const client = await pool.connect();
    try {
        let query = "SELECT * FROM tag WHERE nom_tag LIKE 'default_TAG'";
        let result = await client.query(query);
        if(result.rows.length === 0){
            query = "INSERT INTO tag (nom_tag) VALUES ('default_TAG')"
            await client.query(query)
            await client.query('COMMIT');
            query = "SELECT * FROM tag WHERE nom_tag LIKE 'default_TAG'";
            result = await client.query(query);
            const idDefault = result.rows[0].id_tag;
            await client.query('UPDATE personne_tag SET id_tag=$1 WHERE id_tag = $2', [idDefault,id_tag])
        }else{
            const idDefault = result.rows[0].id_tag;
            query = "SELECT * FROM personne_tag";
            let personne_tag = await client.query(query);
            let tabLigneUse = [];
            for (const row of personne_tag.rows) {
                if(row.id_tag == id_tag){
                    tabLigneUse.push(row);
                }
            }
            if(tabLigneUse !== []){
                for(const row of tabLigneUse){
                    let occurence = false;
                    for(const row2 of personne_tag.rows){
                        if(row.id_personne === row2.id_personne && row2.id_tag === idDefault){
                            occurence = true;
                        }
                    }
                    if(occurence){
                        await client.query('DELETE FROM personne_tag WHERE id_personne=$1 AND id_tag=$2', [row.id_personne,row.id_tag]);
                    }else{
                        await client.query('UPDATE personne_tag SET id_tag=$1 WHERE id_personne=$2 AND id_tag=$3', [idDefault,row.id_personne,row.id_tag])
                    }
                }
            }
        }
        query = "DELETE FROM tag WHERE id_tag=$1"
        await client.query(query, [id_tag])
        await client.query('COMMIT');
    } catch (e) {
        await client.query("ROLLBACK")
        throw e;
    } finally {
        client.release();
    }
}

const updateTag = (body, callback) => {
    updateTagFromAPI(body).then(res => {
        callback(null, res);
    }).catch(error => {
        callback(error, null);
    });
}

async function updateTagFromAPI(body){
    const client = await pool.connect();
    try {
        await client.query('UPDATE tag SET nom_tag=$1 WHERE id_tag=$2', [body.nom_tag,body.id_tag]);
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
    deleteTagById:deleteTagById,
    updateTag:updateTag,
};