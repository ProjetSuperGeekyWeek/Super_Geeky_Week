const roleService = require('../services/roleService');

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