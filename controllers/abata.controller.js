

const sessions = require("express-session");
const Abata = require("../models/abata.model"); 
var router = require("express").Router();




exports.getAziendaOperator=async (req,res)=>{

    if(sessions.userid){

      const [risultato]= await Abata.getProducer(sessions.userid); 
     
      res.send(risultato);
      return;
    
    }
    res.redirect("/");

}

exports.dashboard=(req,res)=>{
  if(sessions.userid){
    console.log("sessione",sessions.userid);
  return res.send({message : "benvenuto", username: sessions.userid});
  }else{
    return res.redirect("/");
  }
}


exports.serverOn= (req, res) => {
   
    return res.status(200).send("Benvenuto su abata ");
}



exports.basicLogin= async (req,res,next)=> {

    console.log("dati inseriti su postman",req.body);
    if (!(req.body.username && req.body.password && req.body.address && req.body.id)) { 
        res.status(401).send(
            {message: "I campi non possono essere vuoti"});
            return;
      }
     
      
    const [prova] = await Abata.login(req.body.id,req.body.username,req.body.password,res);
    
    
    
            if(prova){ 
             sessions.userid=prova.producer_id;
              console.log(req.session);
              
             // await  Abata.insertAddress(req.body.id,req.body.username,req.body.password,req.body.address);

                console.log("attendi");
                return res.redirect('/dashboard');

                }else{
                 
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
  if(session)
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

    
    
    

