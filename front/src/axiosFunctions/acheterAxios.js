import { getRequest, postRequest } from "./axios";

async function getAllAcheter() {
    return await getRequest("/api/acheter/getAllAcheter", "GETALLACHETER");
}
async function getAllAcheterColumn() {
    return await getRequest("/api/acheter/getAllAcheterColumn", "GETALLACHETERCOLUMN");
}
async function addNewAcheter(body){
    return await postRequest("/api/acheter/addAcheter", body, "ADDACHETER")
}

export {
    getAllAcheter,
    getAllAcheterColumn,
    addNewAcheter
}