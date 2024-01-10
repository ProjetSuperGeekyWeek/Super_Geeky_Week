import {getRequest} from "@/axiosFunctions/axios";

async function getAllEmplacementRessource() {
    return await getRequest("/api/emplacementRessource/getAllEmplacementRessource", "GETALL");
}
async function getAllEmplacementRessourceColumn() {
    return await getRequest("/api/emplacementRessource/getAllEmplacementRessourceColumn", "GETALLEMPLACEMENTRESSOURCECOLUMN");
}

export {
    getAllEmplacementRessource,
    getAllEmplacementRessourceColumn
}