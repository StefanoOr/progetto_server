
const connection = require("../models/db");;



exports.login=async (id,username,password,result)=>{
    
    console.log(id,password,username);
    const query = "SELECT user,password,address FROM operator WHERE user=? AND password=? AND id=? AND address IS NULL";
        
        const [rows] = await (await connection).execute(query, [username, password, id] );
    
        console.log(rows);
        if (rows.length  == 0){
            
            result(true, null);
            return;
          }


        
        result(null,rows);

};


exports.insertAddress = async (id,username,password,address) =>{
   
    try{
    await (await connection).execute("UPDATE operator SET address=?  WHERE user=? AND password=? AND id=?", [address, username, password, id]);


    console.log("address inserito con successo");
    result(false,null);
    return;

    }catch(err){
        console.log("errore nell'inserimento dell'addresss");
        result(true,null);
        return;
    }
    
             
    
    

    


}


