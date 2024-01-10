import {getRequest, postRequest} from "./axios";

async function getAllCalendrier() {
    return await getRequest("/api/calendrier/getAllCalendrier", "GETALLCalendrier");
}
async function getAllCalendrierColumn() {
    return await getRequest("/api/calendrier/getAllCalendrierColumn", "GETALLCALENDRIERCOLUMN");
}
async function addNewCalendrier(body){
    return await postRequest("/api/calendrier/addCalendrier", body, "ADDCALENDRIER")
}


export {
    getAllCalendrier,
    getAllCalendrierColumn,
    addNewCalendrier
};