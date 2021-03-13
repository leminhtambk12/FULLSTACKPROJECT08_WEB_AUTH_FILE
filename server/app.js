const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("hello"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));