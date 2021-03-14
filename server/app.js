const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");

//Initialize App
const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
//Use passport middleware
app.use(passport.initialize());
//Bring passport Strategy
require("./config/passport")(passport);
//Bring Database from MongoDB
const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Server has been connected to ${db}`))
    .catch((err) => console.log(`Unable to connect database ${err}`));
//Routes
app.use("/api/users", require("./Routes/users"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));