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
    return await patchRequest('/api/crud/addRole', data, "ADDROLE")
}
//Acheter
async function getAllAcheter() {
    return await getRequest("/api/crud/getAllAcheter", "GETALLACHETER");
}
async function getAllAcheterColumn() {
    return await getRequest("/api/crud/getAllAcheterColumn", "GETALLACHETERCOLUMN");
}
async function addNewAcheter(id_item,id_qr_code,consommer){
    let data = {id_item:id_item,id_qr_code:id_qr_code,consommer:consommer}
    return await patchRequest("api/crud/addAcheter", data, "ADDACHETER")
}

//Calendrier
async function getAllCalendrier() {
    return await getRequest("/api/crud/getAllCalendrier", "GETALLCALENDRIER");
}
async function getAllCalendrierColumn() {
    return await getRequest("/api/crud/getAllCalendrierColumn", "GETALLCALENDRIERCOLUMN");
}
async function addNewCalendrier(date_calendrier,horaire_debut,horaire_fin){
    let data = {date_calendrier:date_calendrier,horaire_debut:horaire_debut,horaire_fin:horaire_fin}
    return await patchRequest("/api/crud/addCalendrier", data, "ADDCALENDRIER")
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
async function addNewEmplacement(nom_emplacement){
    let data = {nom_emplacement:nom_emplacement}
    return await patchRequest("/api/crud/addEmplacement", data, "ADDEMPLACEMENT")
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
async function addNewEvenement(nom_evenement,description_evenement,nb_place,image_evenement,id_personne,id_emplacement){
    let data = {nom_evenement:nom_evenement,description_evenement:description_evenement,nb_place:nb_place,image_evenement:image_evenement,id_personne:id_personne,id_emplacement:id_emplacement}
    return await patchRequest("/api/crud/addEvenement", data, "ADDEVENEMENT")
}

//Item
async function getAllItem() {
    return await getRequest("/api/crud/getAllItem", "GETALL");
}
async function getAllItemColumn() {
    return await getRequest("/api/crud/getAllItemColumn", "GETALLITEMCOLUMN");
}
async function addNewItem(nom_item,stock_item,prix_item,image_item,description_item,id_personne,id_calendrier){
    let data = {nom_item:nom_item,stock_item:stock_item,prix_item:prix_item,image_item:image_item,description_item:description_item,id_personne:id_personne,id_calendrier:id_calendrier}
    return await patchRequest("/api/crud/addItem", data, "ADDITEM")
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
async function addNewPanierStore(){
    let data = {}
    return await patchRequest("/api/crud/addPanier", data, "ADDPANIER")
}

//Personne
async function getAllPersonne() {
    return await getRequest("/api/crud/getAllPersonne", "GETALL");
}
async function getAllPersonneColumn() {
    return await getRequest("/api/crud/getAllPersonneColumn", "GETALLPERSONNECOLUMN");
}
async function addNewPersonne(nom_personne,prenom_personne,mail_personne,mdp_personne,image_personne,description_personne,id_role){
    let data = {nom_personne:nom_personne,prenom_personne:prenom_personne,mail_personne:mail_personne,mdp_personne:mdp_personne,image_personne:image_personne,description_personne:description_personne,id_role:id_role}
    return await patchRequest("/api/crud/addPersonne", data, "ADDPERSONNE")
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
async function addNewQrCode(nom_client,prenom_client,mail_client){
    let data = {nom_client:nom_client,prenom_client:prenom_client,mail_client:mail_client}
    return await patchRequest("/api/crud/addQrCode", data, "ADDQRCODE")
}

//Ressource
async function getAllRessource() {
    return await getRequest("/api/crud/getAllRessource", "GETALL");
}
async function getAllRessourceColumn() {
    return await getRequest("/api/crud/getAllRessourceColumn", "GETALLRESSOURCECOLUMN");
}
async function addNewRessource(nom_ressource){
    let data = {nom_ressource:nom_ressource}
    return await patchRequest("/api/crud/addRessource", data, "ADDRESSOURCE")
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
async function addNewTagStore(nom_tag){
    let data = {nom_tag:nom_tag}
    return await patchRequest("/api/crud/addTag", data, "ADDTAG")
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

