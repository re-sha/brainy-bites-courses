const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, JWT_USER_PASSWORD)

    if(decodedToken) {
        req.userId = decodedToken.id;
        next()
    }

    else {
        res.status(403).json({
            msg: "User is not signed up"
        })
    }
}

module.exports = {
    userMiddleware
}