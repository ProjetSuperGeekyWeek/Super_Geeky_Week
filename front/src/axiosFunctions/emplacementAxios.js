import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllEmplacement() {
    return await getRequest("/api/emplacement/getAllEmplacement", "GETALL");
}
async function getAllEmplacementColumn() {
    return await getRequest("/api/emplacement/getAllEmplacementColumn", "GETALLEMPLACEMENTCOLUMN");
}
async function addNewEmplacement(body){
    return await postRequest("/api/emplacement/addEmplacement", body, "ADDEMPLACEMENT")
}

export {
    getAllEmplacement,
    getAllEmplacementColumn,
    addNewEmplacement
}