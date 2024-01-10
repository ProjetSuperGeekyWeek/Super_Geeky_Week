import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllPanier() {
    return await getRequest("/api/panier/getAllPanier", "GETALL");
}
async function getAllPanierColumn() {
    return await getRequest("/api/panier/getAllPanierColumn", "GETALLPANIERCOLUMN");
}
async function addNewPanierStore(body){
    return await postRequest("/api/panier/addPanier", body, "ADDPANIER")
}

export {
    getAllPanier,
    getAllPanierColumn,
    addNewPanierStore
}