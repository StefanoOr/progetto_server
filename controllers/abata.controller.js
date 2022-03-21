

const Abata = require("../models/abata.model"); 
var router = require("express").Router();









exports.serverOn= (req, res) => {
    console.log("sessione ",req.session);
    console.log("cookie",req.cookies);
    return res.status(200).send("Benvenuto su abata ");
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
                   
              
                return res.redirect('/');
                
                
                }
           
    
}

exports.getPassword=async function(req,res,next){
  console.log("recovery password");

  if (!(req.body.username && req.body.password &&  req.body.id)) { 
    res.status(401).send(
        {message: "I campi non possono essere vuoti"});
        return;
  }
  const recoveryPasswordOperatore= await Abata.getOperatorPassword(req.body.id,req.body.username)
 

  if(recoveryPasswordOperatore){
    res.status(200).send(recoveryPasswordOperatore);
  }else{
    
  }

}


exports.changePassword= async function(req,res,next){
  console.log("ChangePassword");
  
  if (!(req.body.username && req.body.password && req.body.nuovapassword && req.body.id)) { 
   return res.status(401).send(
        {message: "I campi non possono essere vuoti nel cambio password"});
        
  }
  

 const isTrue =await Abata.setNewPassword(req.body.id,req.body.username,req.body.password, req.body.nuovapassword);

  if(isTrue== true){
    res.status(200).send("pass cambiata"); 
  }else{
    res.status(401).send("Dati per il cambio password sbagliati"); 
  }


  
}

    
    
    

