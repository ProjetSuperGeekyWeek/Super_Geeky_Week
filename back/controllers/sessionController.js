const sessionService = require('../services/sessionService');
const { v4: uuidv4 } = require('uuid');

// get
exports.getIdSession = async (req, res) => {
    let uuid = req.cookies.uuidSuperGeekyWeek;
    // console.log(uuid);
    if(uuid){
        sessionService.getIdSession(uuid, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving sessions."
                });
            } else {
                if(data.lenght > 0){//TODO verif valide et égal à cookie
                    res.send(data);
                }
            }
        });
    }
    res.send(false);
}

exports.getSessionById = async (req, res) => {
    sessionService.getSessionById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving session."
            });
        } else {
            res.send(data);
        }
    });
}

exports.getAuthentifierSession = async (req, res) => {
    sessionService.getAuthentifierSession(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving session."
            });
        } else {
            if(data.lenght > 0)
                res.send(true);
            res.send(false);
        }
    });
}

exports.getAdminSession = async (req, res) => {
    sessionService.getAdminSession(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving session."
            });
        } else {
            if(data.lenght > 0)
                res.send(true);
            res.send(false);
        }
    });
}

// post
exports.createSession = async (req, res) => {
    let uuid = uuidv4();
    res.cookie("uuidSuperGeekyWeek", uuid, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        secure: false
    });
    req.cookies.uuidSuperGeekyWeek = uuid;
    // console.log(req.cookies.uuidSuperGeekyWeek);
    sessionService.createSession(uuid, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating session."
            });
        } else {
            res.send(data);
        }
    });
}

exports.linkSessionPresta = async (req, res) => {
    sessionService.linkSessionPresta(req.params.idSession, req.params.idPresta, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while linking session."
            });
        } else {
            res.send(data);
        }
    });
}

// put
exports.updateSessionTime = async (req, res) => {
    sessionService.updateSessionTime(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating session."
            });
        } else {
            res.send(data);
        }
    });
}

// delete
exports.cleanSession = async (req, res) => {
    sessionService.cleanSession((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while cleaning session."
            });
        } else {
            res.send(data);
        }
    });
}

exports.logoutSession = async (req, res) => {
    res.clearCookie("uuidSuperGeekyWeek");
    sessionService.logoutSession(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while logging out session."
            });
        } else {
            res.send(data);
        }
    });
}

