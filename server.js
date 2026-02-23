const fs = require("fs");
const express = require("express");
const http = require("http");
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true })); 


app.get("/app", function(req, res) {

  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(port, hostname, function() {

  console.log(`Listening for requests on http://${hostname}:${port}`);
});

