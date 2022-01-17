module.exports = app => {
  const abata = require("../controllers/abata.controllers.js"); //non lo trova perchè è un file vuoto

  var router = require("express").Router();

   router.post("/login", abata.login);// non esiste


     app.use('/api/abata', router);
   };
