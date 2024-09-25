const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, JWT_ADMIN_PASSWORD);
    if(decodedToken) {
        req.adminId = decodedToken.id;
        next()
    }
    else {
        res.status(403).json({
            msg: 'Admin not signed in'
        })
    }
}

module.exports = {
    adminMiddleware
}