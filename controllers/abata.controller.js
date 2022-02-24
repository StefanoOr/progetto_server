// qui devi creare il modulo rischiamato dal route
const express = require("express");
const connection = require("../models/db");

/*exports.getPassword=async function(req,res,next){
    console.log("recovery password");

    const user=req.body.username;

    const query = "SELECT password FROM operator   WHERE user=?  ";
    const [rows, fields] =  await (await connection).execute(query, [user] );
    console.log("rows", rows);
    res.end(JSON.stringify({ id: rows}));
}


 exports.changePassword= async function(req,res,next){
    console.log("ChangePassword");
    const user = req.body.username;
    const password = req.body.password;
    const nuovapassword = req.body.nuovapassword;
    
    const query = "UPDATE operator SET password=?  WHERE user=? AND password=? ";

    const [rows, fields] =  await (await connection).execute(query, [nuovapassword,user ,password] );
    
    if(rows.length>0){
        console.log("login effettuato",rows);
    }else{
        console.log("login negato",rows);
    }
    res.end(JSON.stringify({ id: rows.info}));
 }
*/
exports.basicLogin= async function (req,res,next) {
    console.log("Login ");

    const usernameI = req.body.username;
    const passwordI = req.body.password;
    const addressI = req.body.address;
    const idI = req.body.id;

    if (usernameI && passwordI && idI && addressI) {
        const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NULL";

        const [rows] = await (await connection).execute(query, [usernameI, passwordI, idI]);


        if (rows.length > 0) {
            console.log("login ", rows);
            var id = rows[0].id;  //TODO var è deprecata, USARE CONST SE IL VALORE CONTENUTO NON VIENE MODIFICATO, OPPURE LET
            var user = rows[0].user;
            var password = rows[0].password;


            if (rows[0].address == null) {

                await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [addressI, usernameI, passwordI, idI]);
                console.log("Address aggiunto con successo", addressI);
                res.send({Id: id, User: user, Password: password, address: addressI});
                return true;

            }


        } else {
            res.send('false!');
            console.log("login fallito ", rows);
            return false;
        }
        res.send({Benvenuto: user});
        res.end();


    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
}
        // TODO VA BENE
        //TODO il prossimo passo è:
        //TODO GESTIONE DEGLI ERRORI, PER EVITARE CHE IL SERVER CRASHI, BISOGNA GESTIRE GLI ERRORI:
        // AD ESEMPIO ARRIVA UN VALORE INASPETTATO DI ID, AD ESEMPIO UNA STRINGA INVECE DI UN NUMERO, SICURAMENTE LA QUERY FALLISCE
        // LE ECCEZIONI VENGONO GESTITE ANCHE CON TRY E CATCH COME IN JAVA.
        // lE RISPOSTE CHE SI DANNO DEVONO ESSERE POSSIBILMENTE NELLA FORMA CLASSICA
        // DI UN SERVER, AD ESEMPIO 200, 404, 500 ECC.
