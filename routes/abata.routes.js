module.exports = app => {
  const abata = require("../controllers/abata.controllers.js");

  var router = require("express").Router();

   router.post("/login", abata.login);


     app.use('/api/abata', router);
   };