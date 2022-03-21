module.exports = app => {
  const abata = require("../controllers/abata.controller.js"); //non lo trova perchè è un file vuoto
  const cookieSession = require('cookie-parser');
  var router = require("express").Router();
  var session = require('express-session');



  app.use(cookieSession());
  app.use(session({
      name: "session-id",
      secret: "GFGEnter", // Secret key,
      saveUninitialized: false,
      resave: false,
    
  }));


1
   app.post("/login", abata.basicLogin);

   app.put("/update", abata.changePassword);

   app.post("/recovery", abata.getPassword);

   //app.get("/dashboard", abata.dashboard);
   
  app.get("/",abata.serverOn);


  
   app.use('/api/abatas', router);
   };

