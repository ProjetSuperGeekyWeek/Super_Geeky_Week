import { getRequest, putRequest } from "./axios";

//get 
async function getPrestataireMailPassword(mail,mdp){
    return await getRequest(`/api/authentification/${mail}/${mdp}`, "GETPRESTATAIREMAILPASSWORD");
}

async function adminVerif(id){
    return await getRequest(`/api/authentification/admin/${id}`, "ADMINVERIF");
}

//put
async function changePassword(id,mdp){
    return await putRequest(`/api/authentification/${id}/${mdp}`, "CHANGEPASSWORD");
}

export {
    getPrestataireMailPassword,
    adminVerif,
    changePassword
}
