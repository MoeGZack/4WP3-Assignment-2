const fs = require("fs");
const express = require("express");

const app = express();


app.use(express.urlencoded({ extended: true })); 



app.get("/app", function(req,res) {
  res.sendFile(`${__dirname}/app.html`);
});


const server = app.listen(3000, function() {

  console.log(`Listening for requests`);
});

