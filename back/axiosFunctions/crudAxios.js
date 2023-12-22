import { getRequest } from "./axios";

//Role
async function getAllRole() {
    return await getRequest("/api/crud/getAllRole", "GETALL");
}

//Acheter
async function getAllAcheter() {
    return await getRequest("/api/crud/getAllAcheter", "GETALLACHETER");
}
async function getAllAcheterColumn() {
    return await getRequest("/api/crud/getAllAcheterColumn", "GETALLACHETERCOLUMN");
}

//Calendrier
async function getAllCalendrier() {
    return await getRequest("/api/crud/getAllCalendrier", "GETALLCALENDRIER");
}
async function getAllCalendrierColumn() {
    return await getRequest("/api/crud/getAllCalendrierColumn", "GETALLCALENDRIERCOLUMN");
}

//Creneau
async function getAllCreneau() {
    return await getRequest("/api/crud/getAllCreneau", "GETALL");
}

//Emplacement
async function getAllEmplacement() {
    return await getRequest("/api/crud/getAllEmplacement", "GETALL");
}

//EmplacementRessource
async function getAllEmplacementRessource() {
    return await getRequest("/api/crud/getAllEmplacementRessource", "GETALL");
}

//Evenement
async function getAllEvenement() {
    return await getRequest("/api/crud/getAllEvenement", "GETALL");
}

//Item
async function getAllItem() {
    return await getRequest("/api/crud/getAllItem", "GETALL");
}

//Ligne Panier
async function getAllLignePanier() {
    return await getRequest("/api/crud/getAllLignePanier", "GETALL");
}

//Panier
async function getAllPanier() {
    return await getRequest("/api/crud/getAllPanier", "GETALL");
}

//Personne
async function getAllPersonne() {
    return await getRequest("/api/crud/getAllPersonne", "GETALL");
}

//PersonneTag
async function getAllPersonneTag() {
    return await getRequest("/api/crud/getAllPersonneTag", "GETALL");
}

//QRCode
async function getAllQrCode() {
    return await getRequest("/api/crud/getAllQrCode", "GETALL");
}

//Ressource
async function getAllRessource() {
    return await getRequest("/api/crud/getAllRessource", "GETALL");
}

//Stand
async function getAllStand() {
    return await getRequest("/api/crud/getAllStand", "GETALL");
}

//Tag
async function getAllTag() {
    return await getRequest("/api/crud/getAllTag", "GETALL");
}


export {
    getAllRole,
    getAllAcheter,
    getAllCalendrier,
    getAllCreneau,
    getAllEmplacement,
    getAllEmplacementRessource,
    getAllEvenement,
    getAllItem,
    getAllLignePanier,
    getAllPanier,
    getAllPersonne,
    getAllPersonneTag,
    getAllQrCode,
    getAllRessource,
    getAllStand,
    getAllTag,
    getAllAcheterColumn,
    getAllCalendrierColumn,
};