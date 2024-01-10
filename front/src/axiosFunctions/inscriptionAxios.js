import { getRequest, postRequest, deleteRequest, putRequest } from "./axios";


//get
async function getAllInscriptionsIdPresta(id) {
    return await getRequest(`/api/inscription/${id}`, "GETALLINSCRIPTIONSIDPRESTA");
}

async function getAllHorairesIdInscription(id) {
    return await getRequest(`/api/inscription/${id}/horaires`, "GETALLHORAIRESIDINSCRIPTION");
}

async function getAllInscritsIdInscription(id) {
    return await getRequest(`/api/inscription/${id}/inscrits`, "GETALLINSCRITSIDINSCRIPTION");
}

async function getJours() {
    return await getRequest(`/api/inscription/jours`, "GETJOURS");
}

//post
async function postInscrit(id_inscription, nom, prenom, description,id_calendrier) {
    return await postRequest(`/api/inscription/${id_inscription}`, {nom, prenom, description,id_calendrier}, "POSTINSCRIT");
}

async function postHoraire(id_inscription, id_jour, heure_debut, heure_fin) {
    return await postRequest(`/api/inscription/${id_inscription}/${id_jour}/${heure_debut}/${heure_fin}`, "POSTHORAIRE");
}

//put
async function putInscription(id_inscription, titre, description, nb_place) {
    return await putRequest(`/api/inscription/${id_inscription}/${titre}/${description}/${nb_place}`, "PUTINSCRIPTION");
}

//delete

async function deleteInscrit(id_inscription,nom,prenom,id_calendrier) {
    return await deleteRequest(`/api/inscription/${id_inscription}/${nom}/${prenom}/${id_calendrier}`, "DELETEINSCRIT");
}

async function deleteHoraire(id_inscription,id_calendrier) {
    return await deleteRequest(`/api/inscription/${id_inscription}/${id_calendrier}`, "DELETEHORAIRE");
}


export { 
    getAllInscriptionsIdPresta,
    getAllHorairesIdInscription,
    getAllInscritsIdInscription,
    getJours,
    postInscrit,
    postHoraire,
    putInscription,
    deleteInscrit,
    deleteHoraire
};