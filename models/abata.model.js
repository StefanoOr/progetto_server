const connection = require("../models/db");

login= async (id,username,password,result)=>{
    // qui non usi try e catch, inoltre fai la query, ma usi return (nulla) al chiamante  solamente quando non trovi corrispondenza
    console.log(id,password,username);
    let rows;
    try{
    const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NULL";
        
         [rows] = await (await connection).execute(query, [username, password, id] ); //Esempio   simulando la programmazione sincrona
         console.log("dati della query login",rows);
        
    }catch(err){
        console.log("login catch",err);
        res.status(400).send("errore login 400");
       // result(400, null);
        return;
    }
       
        if (rows.length  == 0){
            result(401, null);
            return;
          }
        
        result(200,rows);

};


insertAddress = async (id,username,password,address) =>{
   
    try{
    await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [address, username, password, id]);

    console.log("address inserito con successo");
    return;

    }catch(err){
        console.log("errore nell'inserimento dell'addresss",err);
        result(err);
        return;
    }
    
             
}

module.exports ={login,insertAddress};