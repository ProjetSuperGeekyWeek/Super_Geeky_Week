import {getRequest} from "@/axiosFunctions/axios";

async function getAllCreneau() {
    return await getRequest("/api/creneau/getAllCreneau", "GETALLCRENEAU");
}
async function getAllCreneauColumn() {
    return await getRequest("/api/creneau/getAllCreneauColumn", "GETALLCRENEAUCOLUMN");
}

export {
    getAllCreneau,
    getAllCreneauColumn
}