const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
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
//Routes
app.use("/api/users", require("./Routes/users"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));