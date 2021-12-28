const express = require("express");
let models = require("./models/models_table")
const prova = require("./config/split_db")
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");



const actor = new models.Actor("OPT", "OPERATORE", "MIL") //import model

console.log("actor", actor)
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Server on" });
});



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);


});
