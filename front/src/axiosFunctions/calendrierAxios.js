import { getRequest } from "./axios";

async function getAllCalendrier() {
    return await getRequest("/api/calendrier/getAllCalendrier", "GETALLCalendrier");
}


export {
    getAllCalendrier
};