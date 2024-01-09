import { getRequest, postRequest, deleteRequest } from "./axios";


//get
async function getAllInscriptionsIdPresta(id) {
    return await getRequest(`/api/inscription/${id}`, "GETALLINSCRIPTIONSIDPRESTA");
}

async function getAllHorairesIdInscription(id) {
    return await getRequest(`/api/inscription/${id}/horaires`, "GETALLHORAIRESIDINSCRIPTION");
}

//post
async function postInscrit(id_inscription, nom, prenom, description,id_calendrier) {
    return await postRequest(`/api/inscription/${id_inscription}`, "POSTINSCRIT", {nom, prenom, description,id_calendrier});
}

//delete

async function deleteInscrit(id_inscription,nom,prenom,id_calendrier) {
    return await deleteRequest(`/api/inscription/${id_inscription}`, "DELETEINSCRIT", {nom,prenom,id_calendrier});
}


export { 
    getAllInscriptionsIdPresta,
    getAllHorairesIdInscription,
    postInscrit,
    deleteInscrit
};