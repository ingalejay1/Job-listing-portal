const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../schemas/user');

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.header("auth-token");
        if (token) {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            if (verified) {
                const user = await User.findOne({ _id: verified._id });
                if (user) {
                    req.user = user;
                    next();
                }
                else {
                    res.status(401).send("Access Denied")
                }
            }
            else {
                res.status(401).send("Access Denied")
            }
        }
        else {
            res.status(401).send("Access Denied");
        }

    } catch (err) {
        next(err);
    }
    
}

module.exports = authMiddleware;