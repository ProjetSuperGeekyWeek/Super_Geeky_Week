import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllEmplacement() {
    return await getRequest("/api/emplacement/getAllEmplacement", "GETALL");
}
async function getAllEmplacementColumn() {
    return await getRequest("/api/emplacement/getAllEmplacementColumn", "GETALLEMPLACEMENTCOLUMN");
}
async function addNewEmplacement(body){
    return await postRequest("/api/emplacement/addEmplacement", body, "ADDEMPLACEMENT")
}

async function deleteEmplacement(body){
    return await deleteRequest("/api/emplacement/deleteEmplacement?id_emplacement="+body.id_emplacement, "DELETEEMPLACEMENT")
}

async function updateEmplacement(body) {
    return await patchRequest("/api/emplacement/updateEmplacement", body, "UPDATEEMPLACEMENT")
}

export {
    getAllEmplacement,
    getAllEmplacementColumn,
    addNewEmplacement,
    deleteEmplacement,
    updateEmplacement,
}