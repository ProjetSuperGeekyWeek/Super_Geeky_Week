import { getRequest } from "./axios";

async function getAllPrestataires() {
    return await getRequest("/api/prestataire", "GETALLPRESTATAIRES");
}

async function getPrestataireById(id) {
    return await getRequest(`/api/prestataire/${id}`, "GETPRESTATAIREBYID");
}

async function getPrestataireByNom(nom) {
    return await getRequest(`/api/prestataire/nom/${nom}`, "GETPRESTATAIREBYNOM");
}

async function getPrestataireByTag(tag) {
    return await getRequest(`/api/prestataire/tag/${tag}`, "GETPRESTATAIREBYTAG");
}

async function getPrestataireTags(id) {
    return await getRequest(`/api/prestataire/${id}/tags`, "GETPRESTATAIRETAGS");
}

async function sendContactMessage(id, data) {
    return await postRequest(`/api/prestataire/${id}/contact`, data);
}


export { 
    getAllPrestataires ,
    getPrestataireById,
    getPrestataireByNom,
    getPrestataireByTag,
    getPrestataireTags
    sendContactMessage
};
