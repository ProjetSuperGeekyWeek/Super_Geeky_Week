import {getRequest, patchRequest, postRequest} from "./axios";

async function getAllCalendrier() {
    return await getRequest("/api/calendrier/getAllCalendrier", "GETALLCalendrier");
}
async function getAllCalendrierColumn() {
    return await getRequest("/api/calendrier/getAllCalendrierColumn", "GETALLCALENDRIERCOLUMN");
}
async function addNewCalendrier(body){
    return await postRequest("/api/calendrier/addCalendrier", body, "ADDCALENDRIER")
}

async function deleteCalendrier(/*body*/){
    return 0;
    //return await deleteRequest("/api/calendrier/deleteCalendrier", body, "DELETECALENDRIER")
}

async function updateCalendrier(body){
    return await patchRequest("/api/calendrier/updateCalendrier", body, "UPDATECALENDRIER")
}


export {
    getAllCalendrier,
    getAllCalendrierColumn,
    addNewCalendrier,
    updateCalendrier,
    deleteCalendrier
};