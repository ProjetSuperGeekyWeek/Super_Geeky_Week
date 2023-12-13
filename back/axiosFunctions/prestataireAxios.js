import { getRequest } from "./axios";

async function getAllPrestataires() {
    return await getRequest("/api/prestataire", "GETALLPRESTATAIRES");
}


export { 
    getAllPrestataires 
};