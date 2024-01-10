import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllPersonne() {
    return await getRequest("/api/personne/getAllPersonne", "GETALL");
}
async function getAllPersonneColumn() {
    return await getRequest("/api/personne/getAllPersonneColumn", "GETALLPERSONNECOLUMN");
}
async function addNewPersonne(body){
    return await postRequest("/api/personne/addPersonne", body, "ADDPERSONNE")
}

export {
    getAllPersonne,
    getAllPersonneColumn,
    addNewPersonne
}