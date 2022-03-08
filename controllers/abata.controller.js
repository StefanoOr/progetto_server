

const Abata = require("../models/abata.model"); 


exports.serverOn= (req, res) => {
    res.status(200).send("Benvenuto su abata ");
}


exports.basicLogin= (req,res,next)=> {
    console.log("dati inseriti su postman",req.body);
    if (!(req.body.username && req.body.password && req.body.address && req.body.id)) { 
        res.status(401).send(
            {message: "I campi non possono essere vuoti"});
            return;
      }
    
    

      Abata.login(req.body.id,req.body.username,req.body.password,(err,data)=>{ 
    
        console.log(err,"dati",data);
          if(err== 401){ //se è un'errore non significa che non lo trova
         
                res.status(401).send({
                  message: "Operatore non trovato con id , username  o password sbagliata O ADDRESS gia inserito "
                });
             
              }else {

                Abata.insertAddress(req.body.id,req.body.username,req.body.password,req.body.address,(err)=>{
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
    
    

