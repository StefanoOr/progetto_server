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
    
    if(rows.length>0){
        console.log("login effettuato",rows);
    }else{
        console.log("login negato",rows);
    }
    res.end(JSON.stringify({ id: rows.info}));
 }

exports.basicLogin= async function (req,res,next){
    console.log("Login ");

    const username = req.body.username;
    const password = req.body.password;
    
        if(username && password){
        const query = "SELECT id,surname FROM operator WHERE user=? AND password=? ";
        /*query è la query come la scriveresti in sql
        * i valori sono sostituiti da un ?
        * in ordine, il primo preleva l'id
        * il secondo il nome
        * il terzo il producer*/
      
        const [rows] =  await (await connection).execute(query, [username ,password] );
      
         if(rows.length>0){
            console.log("login ", rows);
            var id =rows[0].id;
            var user= rows[0].surname
            console.log(id, user);

         }else{
            res.send('Incorrect Username and/or Password!');
            console.log("login fallito ", rows);
         }  
         res.send({Benvenuto : user});
         res.end();
        
        //console.log("fields", colums);
        }else{
            res.send('Please enter Username and Password!');
		    res.end();
        }
    
      
    
     //non stai inviando il risultato della query e non stai verificando se user e password sono presenti,
                                                                            //fai la query ma ne ignori il risultato, infatti rendi sempre quello che mandi da postman


};
