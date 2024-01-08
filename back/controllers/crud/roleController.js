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
    const nom_role = req.body.nom_role;
    roleService.addNewRole(nom_role, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "pb addNewRole."
            });
        } else {
            res.send(data);
        }
    });
}