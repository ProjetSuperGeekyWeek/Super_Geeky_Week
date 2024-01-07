import { getRequest, deleteRequest, postRequest, putRequest } from "./axios";

//get
async function getIdSession() {
    alert("getIdSession");
    return await getRequest(`/api/session`, "GETIDSESSION");
}

async function getSessionById(id) {
    return await getRequest(`/api/session/${id}`, "GETSESSIONBYID");
}

async function getAuthentifierSession(id) {
    return await getRequest(`/api/session/authentifier/${id}`, "GETAUTHENTIFIERSESSION");
}

async function getAdminSession(id) {
    return await getRequest(`/api/session/admin/${id}`, "GETADMINSESSION");
}

//post
async function createSession() {
    return await postRequest(`/api/session`, "CREATESESSION");
}

async function linkSessionPresta(idSession, idPresta) {
    return await postRequest(`/api/session/${idSession}/${idPresta}`, "LINKSESSIONPRESTA");
}

//put
async function updateSessionTime(id) {
    return await putRequest(`/api/session/${id}`, "UPDATESESSIONTIME");
}

//delete
async function cleanSession() {
    return await deleteRequest(`/api/session`, "CLEANSESSION");
}

async function logoutSession(id) { // permet de détruire le lien presta-session
    return await deleteRequest(`/api/session/${id}`, "LOGOUTSESSION");
}


export {
    getIdSession,
    getSessionById,
    getAuthentifierSession,
    getAdminSession,
    createSession,
    linkSessionPresta,
    updateSessionTime,
    cleanSession,
    logoutSession
};