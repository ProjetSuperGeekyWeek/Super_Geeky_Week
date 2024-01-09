import { getRequest } from "./axios";

//get
async function getTemoignage(){
    return await getRequest(`/api/livredor`, "GETTEMOIGNAGE");
}

export {
    getTemoignage
}
