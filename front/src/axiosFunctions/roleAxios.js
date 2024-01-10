import { getRequest, postRequest } from "./axios";

async function getAllRole() {
    return await getRequest("/api/role/getAllRole", "GETALLROLE");
}
async function getAllRoleColumn() {
    return await getRequest("/api/role/getAllRoleColumn", "GETALLROLECOLUMN");
}
async function addNewRole(body) {
    return await postRequest('/api/role/addRole', body, "ADDROLE")
}

export {
    getAllRole,
    getAllRoleColumn,
    addNewRole,
}