import { getRequest } from "./axios";

//get
async function getTemoignage(){
    alert("getTemoignage");
    return await getRequest(`/api/livredor`, "GETTEMOIGNAGE");
}

export {
    getTemoignage
}
