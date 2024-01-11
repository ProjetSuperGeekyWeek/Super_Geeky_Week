import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllPersonne() {
    return await getRequest("/api/personne/getAllPersonne", "GETALL");
}
async function getAllPersonneColumn() {
    return await getRequest("/api/personne/getAllPersonneColumn", "GETALLPERSONNECOLUMN");
}
async function addNewPersonne(body){
    return await postRequest("/api/personne/addPersonne", body, "ADDPERSONNE")
}

async function updateRowPersonne(body){
    return await patchRequest("/api/personne/updatePersonne", body, "UPDATEPERSONNE")
}

async function deleteRowPersonne(body){
    return await deleteRequest("/api/personne/deletePersonne?id_personne="+body.id_personne, "DELETEPERSONNEBYID")
}

export {
    getAllPersonne,
    getAllPersonneColumn,
    addNewPersonne,
    updateRowPersonne,
    deleteRowPersonne
}