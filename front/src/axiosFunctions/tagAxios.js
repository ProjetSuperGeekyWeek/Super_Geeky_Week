import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllTag() {
    return await getRequest("/api/tag/getAllTag", "GETALL");
}
async function getAllTagColumn() {
    return await getRequest("/api/tag/getAllTagColumn", "GETALLTAGCOLUMN");
}
async function addNewTagStore(body){
    return await postRequest("/api/tag/addTag", body, "ADDTAG")
}

async function deleteRowTag(body){
    return await deleteRequest("/api/tag/deleteTag?id_tag="+body.id_tag, "DELETETAG")
}

async function updateRowTag(body) {
    return await patchRequest("/api/tag/updateTag", body, "UPDATETAG")
}

export {
    getAllTag,
    getAllTagColumn,
    addNewTagStore,
    deleteRowTag,
    updateRowTag,
}