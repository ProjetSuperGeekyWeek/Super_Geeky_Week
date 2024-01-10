import { getRequest, patchRequest, postRequest } from "./axios";

//Role
async function getAllRole() {
    return await getRequest("/api/crud/getAllRole", "GETALLROLE");
}
async function getAllRoleColumn() {
    return await getRequest("/api/crud/getAllRoleColumn", "GETALLROLECOLUMN");
}
async function addNewRole(body){
    return await postRequest('/api/crud/addRole', body, "ADDROLE")
}





//Acheter
async function getAllAcheter() {
    return await getRequest("/api/crud/getAllAcheter", "GETALLACHETER");
}
async function getAllAcheterColumn() {
    return await getRequest("/api/crud/getAllAcheterColumn", "GETALLACHETERCOLUMN");
}
async function addNewAcheter(body){
    return await postRequest("/api/crud/addAcheter", body, "ADDACHETER")
}





//Calendrier
async function getAllCalendrier() {
    return await getRequest("/api/crud/getAllCalendrier", "GETALLCALENDRIER");
}
async function getAllCalendrierColumn() {
    return await getRequest("/api/crud/getAllCalendrierColumn", "GETALLCALENDRIERCOLUMN");
}
async function addNewCalendrier(body){
    return await postRequest("/api/crud/addCalendrier", body, "ADDCALENDRIER")
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
async function addNewEmplacement(body){
    return await postRequest("/api/crud/addEmplacement", body, "ADDEMPLACEMENT")
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
async function addNewEvenement(body){
    return await postRequest("/api/crud/addEvenement", body, "ADDEVENEMENT")
}





//Item
async function getAllItem() {
    return await getRequest("/api/crud/getAllItem", "GETALL");
}
async function getAllItemColumn() {
    return await getRequest("/api/crud/getAllItemColumn", "GETALLITEMCOLUMN");
}
async function addNewItem(body){
    return await postRequest("/api/crud/addItem", body, "ADDITEM")
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
async function addNewPanierStore(body){
    return await postRequest("/api/crud/addPanier", body, "ADDPANIER")
}





//Personne
async function getAllPersonne() {
    return await getRequest("/api/crud/getAllPersonne", "GETALL");
}
async function getAllPersonneColumn() {
    return await getRequest("/api/crud/getAllPersonneColumn", "GETALLPERSONNECOLUMN");
}
async function addNewPersonne(body){
    return await postRequest("/api/crud/addPersonne", body, "ADDPERSONNE")
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
async function addNewQrCode(body){
    return await postRequest("/api/crud/addQrCode", body, "ADDQRCODE")
}





//Ressource
async function getAllRessource() {
    return await getRequest("/api/crud/getAllRessource", "GETALL");
}
async function getAllRessourceColumn() {
    return await getRequest("/api/crud/getAllRessourceColumn", "GETALLRESSOURCECOLUMN");
}
async function addNewRessource(body){
    return await postRequest("/api/crud/addRessource", body, "ADDRESSOURCE")
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
async function addNewTagStore(body){
    return await postRequest("/api/crud/addTag", body, "ADDTAG")
}

//Jour
async function getAllJour() {
    return await getRequest("/api/crud/getAllJour", "GETALLJOUR");
}
async function getAllJourColumn() {
    return await getRequest("/api/crud/getAllJourColumn", "GETALLJOURCOLUMN");
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
    getAllJour,
    getAllJourColumn,
    addNewRole,
    addNewItem,
    addNewAcheter,
    addNewPersonne,
    addNewRessource,
    addNewQrCode,
    addNewPanierStore,
    addNewTagStore,
    addNewEmplacement,
    addNewCalendrier,
    addNewEvenement,
};

