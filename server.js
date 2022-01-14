const express = require("express");
let models = require("./models/models_table");
const prova = require("./config/split_db");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const connection = require("./models/db.js");
/*const {ActorGroup, Actor, Enum, Event, EventResult, Operator, Parameter, ParameteDetail, Producer, Product,
    Product_detail
} = require("../models/models_table");
*/

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
app.post("/login",(req,res)=> {

    console.log("Login ")

    var username = req.body.username;
    	var password = req.body.password;
    	console.log(username);
    	console.log(password);

    res.setHeader('Title', 'value');
    res.end(JSON.stringify({ username: username, password: password }));


});

//require("./routes/abata.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);


});
