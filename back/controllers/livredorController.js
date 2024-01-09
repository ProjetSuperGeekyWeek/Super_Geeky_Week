const livredorService = require('../services/livredorService');

// get
exports.getTemoignage = async (req, res) => {
    livredorService.getTemoignage((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving temoignage."
            });
        } else {
            res.json({ data });
        }
    });
};
