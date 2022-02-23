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
exports.basicLogin= async function (req,res,next){
    console.log("Login ");

    const usernameI = req.body.username;
    const passwordI = req.body.password;
    const addressI = req.body.address;
    const idI= req.body.id;
    
        if(usernameI && passwordI && idI ){
        const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NOT NULL";
       // TODO errore, ti riporto anche qui la query in italiano per recuperare l'operatore con le caratteristiche richieste
            //TODO  "Il server controlla se ci sono  id, user, e password sul db con campo address nullo"

            //TODO  se si soddisfa tale condizione si inserisce l'address mandato
            // dell'operatore che ha mandato i dati e si restituiscono tutti i suoi dati
      
        const [rows] =  await (await connection).execute(query, [usernameI ,passwordI,idI] );


         if(rows.length>0){
            console.log("login ", rows);
            var id =rows[0].id;  //TODO var è deprecata
            var user= rows[0].user;
            var password = rows[0].password;



            if(rows[0].address==""){
               
                await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [addressI,usernameI ,passwordI,idI] );
                console.log("Address aggiunto con successo", addressI);
                res.send({Id : id, User : user , Password : password, address: addressI });
                return;
                
            }
            

         }else{
            res.send('Incorrect Username and/or Password!');
            console.log("login fallito ", rows);
         }  
         res.send({Benvenuto : user});
         res.end();
        
      
        }else{
            res.send('Please enter Username and Password!');
		    res.end();
        }


        //TODO il prossimo passo è:
        //TODO Se il controllo ha avuto sucesso, si inserisce l'address dell'operatore che ha fatto la chiamata
        //TODO quindi, postaman deve comunicare al server id, user, password e address. Questo deve avvenire solo se il campo address è vuoto (null)
    
    
};
