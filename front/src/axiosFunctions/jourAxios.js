import {getRequest} from "@/axiosFunctions/axios";

async function getAllJour() {
    return await getRequest("/api/jour/getAllJour", "GETALLJOUR");
}
async function getAllJourColumn() {
    return await getRequest("/api/jour/getAllJourColumn", "GETALLJOURCOLUMN");
}

export {
    getAllJour,
    getAllJourColumn,
}