const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../config/keys").secret;
const User = require("../model/User");

//Register by POST request
router.post("/register", async(req, res) => {
    let { name, username, email, password, confirm_password } = req.body;
    //Check username
    const checkedUsername = await User.findOne({ username: username }).then(
        (user) => {
            if (user) {
                return res.status(400).json({
                    msg: "Username is already existed.",
                });
            } else {
                return "";
            }
        }
    );
    //Check email
    const checkedEmail = await User.findOne({ email: email }).then((user) => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered.",
            });
        } else {
            return "";
        }
    });
    //Check password if it is not match
    if (password !== confirm_password) {
        return res.status(400).json({ msg: "Password does not match." });
    } else {
        if (checkedUsername === "" && checkedEmail === "") {
            let newUser = new User({
                name,
                username,
                email,
                password,
            });
            //hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then((user) => {
                        return res.status(201).json({
                            success: true,
                            msg: "Hurry! User is now registered.",
                        });
                    });
                });
            });
        }
    }
});
//Login by POST request
router.post("/login", (req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found",
            });
        } else {
            //Username is matched , Now compare password
            bcrypt.compare(req.body.password, user.password).then((isMatch) => {
                if (isMatch) {
                    //User's password is correct and we need to send Json token of that user
                    const payload = {
                        _id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email,
                    };
                    jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                            user: user,
                            msg: "Hurry! you are now logged in",
                        });
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        msg: "Incorrect Password",
                    });
                }
            });
        }
    });
});
//Get profile by GET request
router.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        return res.status(200).json({
            user: req.user,
        });
    }
);
module.exports = router;