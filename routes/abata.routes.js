module.exports = app => {
  const abata = require("../controllers/abata.controller.js"); //non lo trova perchè è un file vuoto
  const cookieSession = require('cookie-parser');
  var router = require("express").Router();
  var sessions= require('express-session');



  app.use(cookieSession());
  const oneDay= 1000 * 60 * 60 * 24;
  app.use(sessions({
     
      secret: "GFGEnter", // Secret key,
      cookie: { maxAge: oneDay },
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

