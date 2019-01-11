var express = require('express');
var mysql = require('mysql');
const config = require('./config');
var app = express();

app.get('/', (req, res) => {
  const options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
  };

  console.log(options);
  let connection = mysql.createConnection(options);

  con.connect((err) {
    if (err) {
      res.send({hello: err});
    } else {
        res.send({hello: "Connected!"});
    }
  });
});

app.listen(config.get('PORT'), '0.0.0.0', () => {
  console.log('Example app listening on port 3000!');
});
