import { getRequest } from "./axios";

async function getAllRole() {
    return await getRequest("/api/crud/getAllRole", "GETALL");
}

async function getAllAcheter() {
    return await getRequest("/api/crud/getAllAcheter", "GETALLACHETER");
}

async function getAllCalendrier() {
    return await getRequest("/api/crud/getAllCalendrier", "GETALL");
}

async function getAllCreneau() {
    return await getRequest("/api/crud/getAllCreneau", "GETALL");
}

async function getAllEmplacement() {
    return await getRequest("/api/crud/getAllEmplacement", "GETALL");
}

async function getAllEmplacementRessource() {
    return await getRequest("/api/crud/getAllEmplacementRessource", "GETALL");
}

async function getAllEvenement() {
    return await getRequest("/api/crud/getAllEvenement", "GETALL");
}

async function getAllItem() {
    return await getRequest("/api/crud/getAllItem", "GETALL");
}

async function getAllLignePanier() {
    return await getRequest("/api/crud/getAllLignePanier", "GETALL");
}

async function getAllPanier() {
    return await getRequest("/api/crud/getAllPanier", "GETALL");
}

async function getAllPersonne() {
    return await getRequest("/api/crud/getAllPersonne", "GETALL");
}

async function getAllPersonneTag() {
    return await getRequest("/api/crud/getAllPersonneTag", "GETALL");
}

async function getAllQrCode() {
    return await getRequest("/api/crud/getAllQrCode", "GETALL");
}

async function getAllRessource() {
    return await getRequest("/api/crud/getAllRessource", "GETALL");
}

async function getAllStand() {
    return await getRequest("/api/crud/getAllStand", "GETALL");
}

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
    getAllTag
};