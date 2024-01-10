import {deleteRequest, getRequest, patchRequest, postRequest} from "./axios";

async function getAllRole() {
    return await getRequest("/api/role/getAllRole", "GETALLROLE");
}
async function getAllRoleColumn() {
    return await getRequest("/api/role/getAllRoleColumn", "GETALLROLECOLUMN");
}
async function addNewRole(body) {
    return await postRequest('/api/role/addRole', body, "ADDROLE")
}

async function deleteRole(body){
    return await deleteRequest('/api/role/deleteRole?id_role='+body.id_role, "DELETEROLE")
}

async function updateRole(body){
    return await patchRequest('/api/role/updateRole', body, "UPDATEROLE")
}

export {
    getAllRole,
    getAllRoleColumn,
    addNewRole,
    deleteRole,
    updateRole,
}