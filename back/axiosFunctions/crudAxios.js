import {getRequest, patchRequest} from "./axios";

//Role
async function getAllRole() {
    return await getRequest("/api/crud/getAllRole", "GETALLROLE");
}
async function getAllRoleColumn() {
    return await getRequest("/api/crud/getAllRoleColumn", "GETALLROLECOLUMN");
}
async function addNewRole(nom_role){
    let data = {nom_role:nom_role}
    return patchRequest('/api/crud/addRole', data, "ADDROLE")
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
    return await getRequest("/api/crud/getAllCreneau", "GETALLCRENEAU");
}
async function getAllCreneauColumn() {
    return await getRequest("/api/crud/getAllCreneauColumn", "GETALLCRENEAUCOLUMN");
}

//Emplacement
async function getAllEmplacement() {
    return await getRequest("/api/crud/getAllEmplacement", "GETALL");
}
async function getAllEmplacementColumn() {
    return await getRequest("/api/crud/getAllEmplacementColumn", "GETALLEMPLACEMENTCOLUMN");
}

//EmplacementRessource
async function getAllEmplacementRessource() {
    return await getRequest("/api/crud/getAllEmplacementRessource", "GETALL");
}
async function getAllEmplacementRessourceColumn() {
    return await getRequest("/api/crud/getAllEmplacementRessourceColumn", "GETALLEMPLACEMENTRESSOURCECOLUMN");
}

//Evenement
async function getAllEvenement() {
    return await getRequest("/api/crud/getAllEvenement", "GETALL");
}
async function getAllEvenementColumn() {
    return await getRequest("/api/crud/getAllEvenementColumn", "GETALLEVENEMENTCOLUMN");
}

//Item
async function getAllItem() {
    return await getRequest("/api/crud/getAllItem", "GETALL");
}
async function getAllItemColumn() {
    return await getRequest("/api/crud/getAllItemColumn", "GETALLITEMCOLUMN");
}

//Ligne Panier
async function getAllLignePanier() {
    return await getRequest("/api/crud/getAllLignePanier", "GETALL");
}
async function getAllLignePanierColumn() {
    return await getRequest("/api/crud/getAllLignePanierColumn", "GETALLLIGNEPANIERCOLUMN");
}

//Panier
async function getAllPanier() {
    return await getRequest("/api/crud/getAllPanier", "GETALL");
}
async function getAllPanierColumn() {
    return await getRequest("/api/crud/getAllPanierColumn", "GETALLPANIERCOLUMN");
}

//Personne
async function getAllPersonne() {
    return await getRequest("/api/crud/getAllPersonne", "GETALL");
}
async function getAllPersonneColumn() {
    return await getRequest("/api/crud/getAllPersonneColumn", "GETALLPERSONNECOLUMN");
}

//PersonneTag
async function getAllPersonneTag() {
    return await getRequest("/api/crud/getAllPersonneTag", "GETALL");
}
async function getAllPersonneTagColumn() {
    return await getRequest("/api/crud/getAllPersonneTagColumn", "GETALLPERSONNETAGCOLUMN");
}

//QRCode
async function getAllQrCode() {
    return await getRequest("/api/crud/getAllQrCode", "GETALL");
}
async function getAllQrCodeColumn() {
    return await getRequest("/api/crud/getAllQrCodeColumn", "GETALLQRCODECOLUMN");
}

//Ressource
async function getAllRessource() {
    return await getRequest("/api/crud/getAllRessource", "GETALL");
}
async function getAllRessourceColumn() {
    return await getRequest("/api/crud/getAllRessourceColumn", "GETALLRESSOURCECOLUMN");
}

//Stand
async function getAllStand() {
    return await getRequest("/api/crud/getAllStand", "GETALL");
}
async function getAllStandColumn() {
    return await getRequest("/api/crud/getAllStandColumn", "GETALLSTANDCOLUMN");
}


//Tag
async function getAllTag() {
    return await getRequest("/api/crud/getAllTag", "GETALL");
}
async function getAllTagColumn() {
    return await getRequest("/api/crud/getAllTagColumn", "GETALLTAGCOLUMN");
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
    getAllRoleColumn,
    getAllCreneauColumn,
    getAllTagColumn,
    getAllStandColumn,
    getAllRessourceColumn,
    getAllQrCodeColumn,
    getAllPersonneTagColumn,
    getAllPersonneColumn,
    getAllPanierColumn,
    getAllLignePanierColumn,
    getAllItemColumn,
    getAllEvenementColumn,
    getAllEmplacementRessourceColumn,
    getAllEmplacementColumn,
    addNewRole,
};

