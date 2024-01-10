import { getRequest, postRequest } from "./axios";

//get
async function getAllTemoignage(){
    return await getRequest(`/api/livredor`, "GETALLTEMOIGNAGE");
}

async function getTemoignageByIdPresta(id){
    return await getRequest(`/api/livredor/${id}`, "GETTEMOIGNAGEBYIDPRESTA");
}

//post
async function postTemoignage(temoignage, pseudo, id_presta){
    return await postRequest(`/api/livredor/${id_presta}/${pseudo}/${temoignage}`, "POSTTEMOIGNAGE");
}

export {
    getAllTemoignage,
    getTemoignageByIdPresta,
    postTemoignage
}
