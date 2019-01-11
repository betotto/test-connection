var express = require('express');
var mysql = require('mysql');
const config = require('./config');
var app = express();


const options = {
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'gestor-siniestros'
};

if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
  options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;
}


app.get('/', (req, res) => {
  var con = mysql.createConnection(options);

  con.connect(function(err) {
    if (err) res.send(err)
    res.send("Connected!");
  });
});

app.listen(config.get('PORT'), '0.0.0.0', () => {
  console.log('Example app listening on port 3000!');
});
