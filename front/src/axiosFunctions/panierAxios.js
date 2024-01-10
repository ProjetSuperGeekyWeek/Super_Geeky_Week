import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllPanier() {
    return await getRequest("/api/panier/getAllPanier", "GETALL");
}
async function getAllPanierColumn() {
    return await getRequest("/api/panier/getAllPanierColumn", "GETALLPANIERCOLUMN");
}
async function addNewPanierStore(body){
    return await postRequest("/api/panier/addPanier", body, "ADDPANIER")
}

async function deleteRowPanier(body){
    return await deleteRequest("/api/panier/deletePanier?id_panier="+body.id_panier, "DELETEPANIER")
}

async function updateRowPanier(body){
    return await patchRequest("/api/panier/updatePanier", body, "UPDATEPANIER")
}

export {
    getAllPanier,
    getAllPanierColumn,
    addNewPanierStore,
    deleteRowPanier,
    updateRowPanier
}