import { getRequest } from "./axios";

//get
async function getAllTemoignage(){
    return await getRequest(`/api/livredor`, "GETALLTEMOIGNAGE");
}

async function getTemoignageByIdPresta(id){
    return await getRequest(`/api/livredor/${id}`, "GETTEMOIGNAGEBYIDPRESTA");
}

export {
    getAllTemoignage,
    getTemoignageByIdPresta
}
