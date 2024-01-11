import {deleteRequest, getRequest, patchRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllQrCode() {
    return await getRequest("/api/qrCode/getAllQrCode", "GETALL");
}
async function getAllQrCodeColumn() {
    return await getRequest("/api/qrCode/getAllQrCodeColumn", "GETALLQRCODECOLUMN");
}
async function addNewQrCode(body){
    return await postRequest("/api/qrCode/addQrCode", body, "ADDQRCODE")
}

async function deleteRowQrCode(body) {
    return await deleteRequest("/api/qrCode/deleteQrCode?id_qr_code="+body.id_qr_code, "DELETEQRCODEBYID");
}

async function updateRowQrCode(body) {
    return await patchRequest("/api/qrCode/updateQrCode", body, "UPDATEQRCODE");
}

export {
    getAllQrCode,
    getAllQrCodeColumn,
    addNewQrCode,
    deleteRowQrCode,
    updateRowQrCode,
}