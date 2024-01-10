import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllItem() {
    return await getRequest("/api/item/getAllItem", "GETALLITEM");
}
async function getAllItemColumn() {
    return await getRequest("/api/item/getAllItemColumn", "GETALLITEMCOLUMN");
}
async function addNewItem(body){
    return await postRequest("/api/item/addItem", body, "ADDITEM")
}

export {
    getAllItem,
    getAllItemColumn,
    addNewItem
}