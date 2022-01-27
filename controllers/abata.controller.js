// qui devi creare il modulo rischiamato dal route
const express = require("express");
const connection = require("../models/db");

 

exports.basicLogin= async function (req,res,next){
    console.log("Login ");

    const ciccio = req.body.username;
    const password1 = req.body.password;
    	
console.log(ciccio);
        const query = "SELECT user, password FROM operator WHERE user=? AND password=? ";
        /*query è la query come la scriveresti in sql
        * i valori sono sostituiti da un ?
        * in ordine, il primo preleva l'id
        * il secondo il nome
        * il terzo il producer*/
       console.log(password1);
        const [rows, fields] =  await (await connection).execute(query, [ciccio ,password1] );
        console.log("rows", rows);
        console.log("fields", fields);

    
    res.setHeader('Title', 'value');
    res.end(JSON.stringify({ username: ciccio, password: password1 })); //non stai inviando il risultato della query e non stai verificando se user e password sono presenti,
                                                                            //fai la query ma ne ignori il risultato, infatti rendi sempre quello che mandi da postman


};
