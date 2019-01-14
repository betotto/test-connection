var express = require('express');
var mysql = require('mysql');
const config = require('./config');
var app = express();

app.get('/', (req, res) => {
  const options = {
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DB,
    password: process.env.DB_PASSWORD
  };

  console.log(options);
  let connection = mysql.createConnection(options);

  con.connect((err) => {
    if (err) {
      res.send({hello: err});
    } else {
        res.send({hello: "Connected!"});
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port 3000!');
});
