const express = require('express');

const app = express();

app.use(express.static('client/dist'));

app.get('http://192.168.33.30:80/', (req, res)=> {
  res.send("TODO...");
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});