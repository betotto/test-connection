var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/', (req, res) => {
  var con = mysql.createConnection({
    host: process.env.SQL_DATABASE,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD
  });

  con.connect(function(err) {
    if (err) res.send(err)
    res.send("Connected!");
  });
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Example app listening on port 3000!');
});
