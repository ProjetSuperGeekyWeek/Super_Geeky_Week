import {getRequest} from "@/axiosFunctions/axios";

async function getAllStand() {
    return await getRequest("/api/stand/getAllStand", "GETALL");
}
async function getAllStandColumn() {
    return await getRequest("/api/stand/getAllStandColumn", "GETALLSTANDCOLUMN");
}

export {
    getAllStand,
    getAllStandColumn
}