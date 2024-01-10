import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllRessource() {
    return await getRequest("/api/ressource/getAllRessource", "GETALL");
}
async function getAllRessourceColumn() {
    return await getRequest("/api/ressource/getAllRessourceColumn", "GETALLRESSOURCECOLUMN");
}
async function addNewRessource(body){
    return await postRequest("/api/ressource/addRessource", body, "ADDRESSOURCE")
}

async function deleteRowRessource(body){
    return await deleteRequest("/api/ressource/deleteRessource?id_ressource="+body.id_ressource, "DELETERESSOURCE")
}

async function updateRowRessource(body){
    return await patchRequest("/api/ressource/updateRessource", body, "UPDATERESSOURCE")
}

export {
    getAllRessource,
    getAllRessourceColumn,
    addNewRessource,
    deleteRowRessource,
    updateRowRessource,
}