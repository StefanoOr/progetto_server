// qui devi creare il modulo rischiamato dal route
const express = require("express");
const connection = require("../models/db");

// TODO cancella tutti i commenti
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
    let usernameI;
    let passwordI;
    let addressI ;
    let idI ;

     usernameI = req.body.username;
     passwordI = req.body.password;
     addressI = req.body.address;
     idI = req.body.id;

     
    
    
try{ //TODO POCO FUNZIONALE, SE CATTURA UN'ERRORE, NON SI SA DA DOVE PROVIENE
    if (usernameI && passwordI && idI && addressI) {
        
        const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NULL";
        
        const [rows] = await (await connection).execute(query, [usernameI, passwordI, idI]);
        
            

        if (rows.length > 0) {
            console.log("login ", rows);
            const id = rows[0].id;  //TODO var è deprecata, USARE CONST SE IL VALORE CONTENUTO NON VIENE MODIFICATO, OPPURE LET
            const user = rows[0].user;
            const password = rows[0].password;


            if (rows[0].address == null) {

                await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [addressI, usernameI, passwordI, idI]);
                console.log("Address aggiunto con successo", addressI);
                res.status(200).send({Id: id, User: user, Password: password, address: addressI});
                
                return true;

            }


        } else {
            res.status(200).send('false!'); // SE LA CHIAMATA NON HA AVUTO SUCCESSO NON PUÒ ESSERE 200
            console.log("login fallito ", rows);
            return false;
        }
        res.send({Benvenuto: user}); //QUANDO SI VERIFICA QUESTA RISPOSTA?
        res.end();


    } else {
       
        res.status(401).send('Please enter Username and Password!');
        res.end();
    }
    }catch(err){
        res.status(500).send("errore");
    }
}
