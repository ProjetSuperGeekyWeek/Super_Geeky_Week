import { getRequest } from "./axios";

async function getAllItems() {
    return await getRequest("/api/boutique/getAllItems", "GETALLITEMS");
}


export {
    getAllItems
};