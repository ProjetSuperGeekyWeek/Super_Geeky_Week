import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllItem() {
    return await getRequest("/api/item/getAllItem", "GETALLITEM");
}
async function getAllItemColumn() {
    return await getRequest("/api/item/getAllItemColumn", "GETALLITEMCOLUMN");
}
async function addNewItem(body){
    return await postRequest("/api/item/addItem", body, "ADDITEM")
}

async function deleteRowItem(body){
    return await deleteRequest("/api/item/deleteItem?id_item="+body.id_item+'&id_personne='+body.id_personne+'&id_calendrier='+body.id_calendrier, "DELETEITEMBYID");
}

async function updateRowItem(body){
    return await patchRequest("/api/item/updateItem", body, "UPDATEITEM")
}

async function getItemById(body) {
    return await getRequest("/api/item/getItemById/"+body, "GETITEMBYID")
}

export {
    getAllItem,
    getAllItemColumn,
    addNewItem,
    deleteRowItem,
    updateRowItem,
    getItemById,
}