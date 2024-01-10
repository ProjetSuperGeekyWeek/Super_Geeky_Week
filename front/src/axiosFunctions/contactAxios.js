import { getRequest, deleteRequest } from "./axios";

//get
async function getAllContactIdPresta(id){
    return await getRequest(`/api/contact/${id}`, "GETALLCONTACTIDPRESTA");
}

//delete
async function deleteContact(id){
    return await deleteRequest(`/api/contact/${id}`, "DELETECONTACT");
}

export {
    getAllContactIdPresta,
    deleteContact
}