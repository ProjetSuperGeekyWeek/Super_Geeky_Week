import {getRequest} from "@/axiosFunctions/axios";

async function getAllPersonneTag() {
    return await getRequest("/api/personneTag/getAllPersonneTag", "GETALL");
}
async function getAllPersonneTagColumn() {
    return await getRequest("/api/personneTag/getAllPersonneTagColumn", "GETALLPERSONNETAGCOLUMN");
}

export {
    getAllPersonneTag,
    getAllPersonneTagColumn
}