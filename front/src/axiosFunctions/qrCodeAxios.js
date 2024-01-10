import {getRequest, postRequest} from "@/axiosFunctions/axios";

async function getAllQrCode() {
    return await getRequest("/api/qrCode/getAllQrCode", "GETALL");
}
async function getAllQrCodeColumn() {
    return await getRequest("/api/qrCode/getAllQrCodeColumn", "GETALLQRCODECOLUMN");
}
async function addNewQrCode(body){
    return await postRequest("/api/qrCode/addQrCode", body, "ADDQRCODE")
}

export {
    getAllQrCode,
    getAllQrCodeColumn,
    addNewQrCode
}