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
app.get("/", (req, res) => {
    res.json({ message: "Server on" });
});


//app.use('/login',)
/*app.post("/login",async(req,res)=> {

    console.log("Login ");
    console.log("Login ");

    const ciccio = req.body.username;
    const password1 = req.body.password;
    	

        const query = "SELECT user, password FROM operator WHERE user=? AND password=? ";
       query è la query come la scriveresti in sql
         i valori sono sostituiti da un ?
         in ordine, il primo preleva l'id
         il secondo il nome
         il terzo il producer
       
        const [rows, fields] =  await (await connection).execute(query, [ciccio ,password1] );
        console.log("rows", rows);
        console.log("fields", fields);

    
    res.setHeader('Title', 'value');
    res.end(JSON.stringify({ username: ciccio, password: password1 }));


});*/

require("./routes/abata.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);


});

/*
L'errore che da quando parte il server è questo:

Error: Cannot find module './models/db'

perchè .models/db non è un modulo. Rivedere come si richiamano i file per poter essere usati in altri file

 */
