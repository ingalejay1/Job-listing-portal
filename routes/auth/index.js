const express = require("express");
const router = express.Router();
const User = require("../../schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Wrong email or password" });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(400).json({ message: "Wrong email or password" });
        }
        else {
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.json({ message: "Logged in successfully", token: token, user: user.name });
        }
    }
    catch (err) {
        next(err);
    }

})


router.post("/register", async (req, res) => {
    const { name, email, password, mobile } = req.body;
    const user = await User.findOne({ email });  // it returns a promise
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        mobile
    });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
});


module.exports = router;