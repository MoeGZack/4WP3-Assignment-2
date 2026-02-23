const fs = require("fs");
const express = require("express");
const http = require("http");
const port = 3000;
const hostname = "localhost";
const apiKey= '854730edca354af4b268df6279ed5c21';
const apiUrl = 'https://api.rawg.io/api/games';
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true })); 


app.get("/app", function(req, res) {

  res.sendFile(__dirname + "/index.html");
});


//app.post("/search", function(req, res) {
//const {searchname, genre, platform, resultsamount} = req.body;
//console.log("Received search parameters:", searchname, genre, platform, resultsamount);
//res.json({ message: "Search parameters received", searchname, genre, platform, resultsamount });
//});

app.post("/search", function(req, res) {
  const {genre, platform, resultsamount } = req.body;
  console.log("Received search parameters:", genre, platform, resultsamount);

  const rawAPIresponse=  fetch(`${apiUrl}?key=${apiKey}&genres=${encodeURIComponent(genre)}&platforms=${encodeURIComponent(platform)}&page_size=${encodeURIComponent(resultsamount)}`)
    .then(response => response.json())
    .then(data => {
      console.log("API response data:", data);
      res.json(data);
    })
    .catch(error => {
      console.error("Error fetching API data:", error);
      res.status(500).json({ error: "Failed to fetch API data" });
    });
});

const server = app.listen(port, hostname, function() {

  console.log(`Listening for requests on http://${hostname}:${port}`);
});

