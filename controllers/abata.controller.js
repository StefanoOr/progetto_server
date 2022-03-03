// qui devi creare il modulo rischiamato dal route
const express = require("express"); // non lo usi, si cancella
const connection = require("../models/db"); //non lo usi, si cancella
const Abata = require("../models/abata.model"); // non esiste, di conseguenza le funzioni  Abata.login
                                                // e Abata.insertAddress non ci sono


exports.serverOn= (req, res) => {
    res.status(200).send("Benvenuto su abata ");
}


exports.basicLogin= (req,res,next)=> {
    console.log("dati inseriti su postman",req.body);
    if (!(req.body.username && req.body.password && req.body.address && req.body.id)) { //controllo sicuramente migliorabile, si verifica quando tutti sono vuoti
        res.status(400).send(
            {message: "I campi non possono essere vuoti"});
            return;
      }
    
    

      Abata.login(req.body.id,req.body.username,req.body.password,(err,data)=>{ // scelta non corretta per chiamare la funzione
        // La via più semplice è usare il modo usato dall'inizio, simulando la programmazione sincrona con await
        console.log(err,"dati",data);
          if(err){ //se è un'errore non significa che non lo trova
            
                res.status(500).send({
                  message: "Operatore non trovato con id , username  o password sbagliata O ADDRESS gia inserito "
                });
             
              }else{

                Abata.insertAddress(req.body.id,req.body.username,req.body.password,req.body.address,(err,data)=>{
                    if(err){
                        res.status(400).send({
                            message: "errore nell'inserimento dell'address "
                          }); 
                    }
                    console.log("address inseritto correttamente");
                    
                });
               
                res.send(data);
              } 
           
          
      });

    }
    
    
 
