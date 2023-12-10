import { getRequest, postRequest, deleteRequest, putRequest } from './axios.js';

async function getInfoBulle(id) {
    return await getRequest('/api/carte_interactive/getInfoBulle/'+id, 'GETINFOBULLE');
}

async function getInfoPanel(id) {
    return await getRequest('/api/carte_interactive/getInfoPanel/'+id, 'GETINFOPANEL');
}

async function saveStand(id, id_prestataire) {
    return await postRequest('/api/carte_interactive/saveStand/'+id+'?id_prestataire='+id_prestataire, {}, 'SAVESTAND');
}

async function updateStand(id, id_prestataire) {
    return await putRequest('/api/carte_interactive/updateStand/'+id+'?id_prestataire='+id_prestataire, {}, 'UPDATESTAND');
}

async function deleteStand(id) {
    return await deleteRequest('/api/carte_interactive/deleteStand/'+id, 'DELETESTAND');
}

export { getInfoBulle, getInfoPanel, saveStand, updateStand, deleteStand };