const jwt = require("jsonwebtoken")
const JWT_SECRET = "esdflg3234qgu32";

function auth(req, res, next){
    const token = req.headers.authorization;
    try{
        const verifiedToken = jwt.verify(token, JWT_SECRET)
        if(verifiedToken){
            res.json({
                msg: "Authentiated user"
            })
        }
        next();
    }
    catch(e){
        res.json("Unauthorized user");
    }
}

module.exports = {
    auth,
    JWT_SECRET
}