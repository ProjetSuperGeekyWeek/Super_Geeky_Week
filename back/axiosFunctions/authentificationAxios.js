import { getRequest } from "./axios";

//get 
async function getPrestataireMailPassword(mail,mdp){
    alert("getPrestataireMailPassword");
    return await getRequest(`/api/authentification/${mail}/${mdp}`, "GETPRESTATAIREMAILPASSWORD");
}

async function adminVerif(idPresta){
    alert("adminVerif");
    return await getRequest(`/api/authentification/admin/${idPresta}`, "ADMINVERIF");
}

export {
    getPrestataireMailPassword,
    adminVerif
}
