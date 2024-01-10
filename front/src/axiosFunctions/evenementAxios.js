import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllEvenement() {
    return await getRequest("/api/evenement/getAllEvenement", "GETALL");
}
async function getAllEvenementColumn() {
    return await getRequest("/api/evenement/getAllEvenementColumn", "GETALLEVENEMENTCOLUMN");
}
async function addNewEvenement(body){
    return await postRequest("/api/evenement/addEvenement", body, "ADDEVENEMENT")
}

async function deleteEvenement(body){
    return await deleteRequest("/api/evenement/deleteEvenement?id_evenement="+body.id_evenement, "DELETEEVENEMENTBYID");
}

async function updateEvenement(body){
    return await patchRequest("/api/evenement/updateEvenement", body, "UPDATEEVENEMENT")
}

export {
    getAllEvenement,
    getAllEvenementColumn,
    addNewEvenement,
    deleteEvenement,
    updateEvenement,
}