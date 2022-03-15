module.exports = app => {
  const abata = require("../controllers/abata.controller.js"); //non lo trova perchè è un file vuoto

  var router = require("express").Router();
  

   app.post("/login", abata.basicLogin);

   app.put("/update", abata.changePassword);

   app.post("/recovery", abata.getPassword);
   
  app.get("/",abata.serverOn);


  
   app.use('/api/abatas', router);
   };

