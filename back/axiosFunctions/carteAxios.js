import { getRequest, postRequest, deleteRequest, putRequest } from './axios.js';

async function getInfoBulle(id) {
    return await getRequest('/api/carte_interactive/InfoBulle/'+id, 'GETINFOBULLE');
}

async function getInfoPanel(id) {
    return await getRequest('/api/carte_interactive/InfoPanel/'+id, 'GETINFOPANEL');
}

async function getInfoPanelNoTake(id) {
    return await getRequest('/api/carte_interactive/InfoPanelNoTake/'+id, 'GETINFOPANELNOTAKE');
}

async function getAllStandsTaken() {
    return await getRequest('/api/carte_interactive/AllStandsTaken', 'GETALLSTANDSTAKEN');
}

async function saveStand(id, id_prestataire) {
    return await postRequest('/api/carte_interactive/Stand/'+id+'?id_prestataire='+id_prestataire, {}, 'SAVESTAND');
}

async function updateStand(id, id_prestataire) {
    return await putRequest('/api/carte_interactive/Stand/'+id+'?id_prestataire='+id_prestataire, {}, 'UPDATESTAND');
}

async function deleteStand(id) {
    return await deleteRequest('/api/carte_interactive/Stand/'+id, 'DELETESTAND');
}

export { 
    getInfoBulle, 
    getInfoPanel, 
    saveStand, 
    updateStand, 
    deleteStand, 
    getAllStandsTaken,
    getInfoPanelNoTake
};