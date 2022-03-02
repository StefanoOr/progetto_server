//TODO ELIMINA I COMMENTI, C'E' GIÀ CONFUSIONE
const express = require("express");
let models = require("./models/models_table");
//const prova = require("./config/split_db");

const cors = require("cors");
const connection = require("./models/db");

//console.log("questo è il console log:",connection);
/*const {ActorGroup, Actor, Enum, Event, EventResult, Operator, Parameter, ParameteDetail, Producer, Product,
    Product_detail
} = require("../models/models_table");
*/

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




require("./routes/abata.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);


});


