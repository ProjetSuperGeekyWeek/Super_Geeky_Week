const pg = require('pg');
const dotenv = require("dotenv");
dotenv.config();

const pool = require("../database/db.js");

exports.getInfobulle = async (id) => {
    console.log("id", id);
    try {
        const query = `
        SELECT * FROM personne 
        INNER JOIN associer_a ON personne.id_personne = associer_a.id_personne
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await pool.query(query, values);
        console.log("nom", result.rows[0].nom);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}

exports.getInfoPanel = async (id) => {
    try {
        const query = `
        SELECT * FROM personne 
        INNER JOIN associer_a ON personne.id_personne = associer_a.id_personne
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}

exports.saveStand = async (id, id_prestataire) => {
    try {
        const query = `
        INSERT INTO associer_a (id_stand, id_personne)
        VALUES ($1, $2)
        `;
        const values = [id, id_prestataire];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}

exports.updateStand = async (id, id_prestataire) => {
    try {
        const query = `
        UPDATE associer_a
        SET id_personne = $2
        WHERE id_stand = $1
        `;
        const values = [id, id_prestataire];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}

exports.deleteStand = async (id) => {
    try {
        const query = `
        DELETE FROM associer_a
        WHERE id_stand = $1
        `;
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (e) {
        throw e;
    }
}


