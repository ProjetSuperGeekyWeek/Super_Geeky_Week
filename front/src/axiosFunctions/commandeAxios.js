import { getRequest, putRequest } from "./axios";

//get
async function getCommande(uuid_commande){
    return await getRequest(`/api/commande/${uuid_commande}`, "GETCOMMANDE");
}

async function getCommandePresta(id_personne, uuid_commande){
    return await getRequest(`/api/commande/${id_personne}/${uuid_commande}`, "GETCOMMANDEPRESTA");
}


//put
async function validerLigneCommande(id_acheter){
    return await putRequest(`/api/commande/valider/${id_acheter}`, "VALIDERLIGNECOMMANDE");
}


export {
    getCommande,
    getCommandePresta,
    validerLigneCommande
}