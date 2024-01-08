import { getRequest } from "./axios";

//get 
async function getPrestataireMailPassword(mail,mdp){
    return await getRequest(`/api/authentification/${mail}/${mdp}`, "GETPRESTATAIREMAILPASSWORD");
}

async function adminVerif(id){
    return await getRequest(`/api/authentification/admin/${id}`, "ADMINVERIF");
}

export {
    getPrestataireMailPassword,
    adminVerif,
}
