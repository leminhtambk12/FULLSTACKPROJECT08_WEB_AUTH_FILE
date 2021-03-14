const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../config/keys").secret;
const User = require("../model/User");

router.get("/", (req, res) => res.send("hello"));
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
module.exports = router;