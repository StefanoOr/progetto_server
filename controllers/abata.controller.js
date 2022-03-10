

const Abata = require("../models/abata.model"); 


exports.serverOn= (req, res) => {
    res.status(200).send("Benvenuto su abata ");
}


exports.basicLogin= async (req,res,next)=> {
    console.log("dati inseriti su postman",req.body);
    if (!(req.body.username && req.body.password && req.body.address && req.body.id)) { 
        res.status(401).send(
            {message: "I campi non possono essere vuoti"});
            return;
      }
      
    
    

    const prova = await Abata.login(req.body.id,req.body.username,req.body.password,res);
    
    
             
            if(prova){

           
              await  Abata.insertAddress(req.body.id,req.body.username,req.body.password,req.body.address);
                   
                
                
                res.status(200).send(prova); 
                }
           
    
}

    
    
    

