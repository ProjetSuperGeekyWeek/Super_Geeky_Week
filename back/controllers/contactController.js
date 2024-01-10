const contactService = require('../services/contactService');

//get
exports.getAllContactIdPresta = async (req, res) => {
    contactService.getAllContactIdPresta(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving contact."
            });
        } else {
            res.send(data);
        }
    });
}

//delete
exports.deleteContact = async (req, res) => {
    contactService.deleteContact(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting contact."
            });
        } else {
            res.send(data);
        }
    });
}