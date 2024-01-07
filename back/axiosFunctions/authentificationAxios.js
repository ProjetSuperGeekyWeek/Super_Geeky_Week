import { getRequest } from "./axios";

//get 
async function getPrestataireMailPassword(mail,mdp){
    return await getRequest(`/api/authentification/${mail}/${mdp}`, "GETPRESTATAIREMAILPASSWORD");
}

async function adminVerif(idPresta){
    return await getRequest(`/api/authentification/admin/${idPresta}`, "ADMINVERIF");
}

export {
    getPrestataireMailPassword,
    adminVerif
}
