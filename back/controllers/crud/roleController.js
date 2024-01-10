const roleService = require('../../services/crud/roleService');

exports.getAllRole = async (req, res) => {
    roleService.getAllRole((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb roleController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAllRoleColumn = async (req, res) => {
    roleService.getAllRoleColumn((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb roleController."
            });
        } else {
            res.send(data);
        }
    });
}

exports.addNewRole = async (req, res) => {
    roleService.addNewRole(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewRole."
            });
        } else {
            res.send(data);
        }
    });
}

exports.deleteRoleById = async (req, res) => {
    const id_role = req.query.id_role;
    if(!id_role){
        return res.status(400).send("UUID Required!");
    }
    roleService.deleteRoleById(id_role, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb deleteRoleById."
            });
        } else {
            res.send(data);
        }
    });
}

exports.updateRole = async (req, res) => {
    roleService.updateRole(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "pb updateRole"
            });
        }else{
            res.send(data);
        }
    });
}