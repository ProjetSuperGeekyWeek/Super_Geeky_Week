import {deleteRequest, getRequest, patchRequest, postRequest} from "./axios";

async function getAllAcheter() {
    return await getRequest("/api/acheter/getAllAcheter", "GETALLACHETER");
}
async function getAllAcheterColumn() {
    return await getRequest("/api/acheter/getAllAcheterColumn", "GETALLACHETERCOLUMN");
}
async function addNewAcheter(body){
    return await postRequest("/api/acheter/addAcheter", body, "ADDACHETER")
}

async function deleteAcheter(body){
    return await deleteRequest("/api/acheter/deleteAcheter?id_acheter="+body.id_acheter, "DELETEACHETER")
}

async function updateAcheter(body){
    return await patchRequest("/api/acheter/updateAcheter", body, "UPDATEACHETER")
}

export {
    getAllAcheter,
    getAllAcheterColumn,
    addNewAcheter,
    deleteAcheter,
    updateAcheter,
}