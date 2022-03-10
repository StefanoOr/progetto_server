const res = require("express/lib/response");
const connection = require("../models/db");

 login =async (id,username,password,res)=>{
   
    console.log(id,password,username);
    let rows;
    try{
    const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NULL";
        
         [rows] = await (await connection).execute(query, [username, password, id] ); 
         console.log("dati della query login",rows);
         
         if (rows.length  == 0){
            res.status(400).send({
                message: "Nessun utente trovato , password o username sbagliati o addres gia inserito "}); 
            return false;
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

module.exports = {login,insertAddress};