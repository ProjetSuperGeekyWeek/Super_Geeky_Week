import {getRequest} from "@/axiosFunctions/axios";

async function getAllLignePanier() {
    return await getRequest("/api/lignePanier/getAllLignePanier", "GETALL");
}
async function getAllLignePanierColumn() {
    return await getRequest("/api/lignePanier/getAllLignePanierColumn", "GETALLLIGNEPANIERCOLUMN");
}

export {
    getAllLignePanier,
    getAllLignePanierColumn,
}