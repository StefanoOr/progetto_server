// qui devi creare il modulo rischiamato dal route
const express = require("express");
const connection = require("../models/db");

exports.getPassword=async function(req,res,next){
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
    
    res.end(JSON.stringify({ id: rows.info}));
 }

exports.basicLogin= async function (req,res,next){
    console.log("Login ");

    const ciccio = req.body.username;
    const password1 = req.body.password;
    

        const query = "SELECT id FROM operator WHERE user=? AND password=? ";
        /*query è la query come la scriveresti in sql
        * i valori sono sostituiti da un ?
        * in ordine, il primo preleva l'id
        * il secondo il nome
        * il terzo il producer*/
      
        const [rows] =  await (await connection).execute("SELECT id FROM operator WHERE user=? AND password=? ", [ciccio ,password1] );
      
            
        console.log("rows", rows);
        //console.log("fields", colums);
     
       console.log("id", id);
        res.setHeader('Title', 'value');
        res.end(JSON.stringify({ id: rows}));
    
     //non stai inviando il risultato della query e non stai verificando se user e password sono presenti,
                                                                            //fai la query ma ne ignori il risultato, infatti rendi sempre quello che mandi da postman


};
