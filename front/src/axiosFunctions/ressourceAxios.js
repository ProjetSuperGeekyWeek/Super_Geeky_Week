import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllRessource() {
    return await getRequest("/api/ressource/getAllRessource", "GETALL");
}
async function getAllRessourceColumn() {
    return await getRequest("/api/ressource/getAllRessourceColumn", "GETALLRESSOURCECOLUMN");
}
async function addNewRessource(body){
    return await postRequest("/api/ressource/addRessource", body, "ADDRESSOURCE")
}

export {
    getAllRessource,
    getAllRessourceColumn,
    addNewRessource
}