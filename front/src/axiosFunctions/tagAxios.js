import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllTag() {
    return await getRequest("/api/tag/getAllTag", "GETALL");
}
async function getAllTagColumn() {
    return await getRequest("/api/tag/getAllTagColumn", "GETALLTAGCOLUMN");
}
async function addNewTagStore(body){
    return await postRequest("/api/tag/addTag", body, "ADDTAG")
}

export {
    getAllTag,
    getAllTagColumn,
    addNewTagStore,
}