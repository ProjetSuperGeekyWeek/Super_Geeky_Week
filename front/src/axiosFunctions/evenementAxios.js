import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllEvenement() {
    return await getRequest("/api/evenement/getAllEvenement", "GETALL");
}
async function getAllEvenementColumn() {
    return await getRequest("/api/evenement/getAllEvenementColumn", "GETALLEVENEMENTCOLUMN");
}
async function addNewEvenement(body){
    return await postRequest("/api/evenement/addEvenement", body, "ADDEVENEMENT")
}

export {
    getAllEvenement,
    getAllEvenementColumn,
    addNewEvenement
}