const res = require("express/lib/response");

const connection = require("../models/db");




 login =async (id,username,password,res)=>{
   
    console.log(id,password,username);
    let rows;
    try{
    const query = "SELECT user,password FROM operator WHERE user=? AND password=? AND id=? ";
        
         [rows] = await (await connection).execute(query, [username, password, id] ); 
         console.log("dati della query login",rows);
         
         if (rows.length  == 0){
            res.status(400).send({
                message: "Nessun utente trovato , password o username sbagliati o addres gia inserito "}); 
            return rows;
          }
          
        return rows;
        
    }catch(err){
        console.log("login catch",err);
        res.status(400).send({
            message: "errore  nel login  "}); 
        return  false;
    }
       
        

};


 insertAddress= async (id,username,password,address) =>{
   
    try{
    await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [address, username, password, id]);

    console.log("address inserito con successo");
   
    return true;

    }catch(err){
        console.log("errore nell'inserimento dell'addresss",err);
        res.status(400).send({
            message: "errore  nel update dell'address  "}); 
        return false;
    }
        
};

setNewPassword = async(id,user,password,newPassword)=>{


    try {
        const [rows]=await (await connection).execute("SELECT user,password,id FROM operator WHERE user=? AND password=? AND id=? ", [user ,password,id] );
        console.log("cambiiamento");

        if(rows.length != 0){
            console.log("risultato query",rows);
    const query = "UPDATE operator SET password=?  WHERE user=? AND password=? AND id=? ";
    
     await (await connection).execute(query, [newPassword,user ,password,id] );
            console.log("cambio password");
        }else{
            throw "I dati inseriti per il cambio password sbagliati"
        }
        return true;
    
    }catch(err){

        console.log(err);
        return false;
    }
};

getOperatorPassword = async(id,user)=>{

    try {
        const query = "SELECT password FROM operator   WHERE user=? AND id=? ";
        const [rows] =  await (await connection).execute(query, [user,id] );
        if(rows.length != 0){
            console.log("risultato query",rows);
            return rows;
    
        }else{
            console.log("ERROR");
            res.status(401).send({
                message: "errore nel recupero password "});
            return ;
        }
            
    

    }catch(err){
        
        //res.status(401).send("prova");
       
        
        return ;
    }
};



module.exports = {login,insertAddress,setNewPassword,getOperatorPassword};