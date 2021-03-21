const express = require('express');
var patients = require('./patient.js')
const app = express();
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
  res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/API/patient', patients)
app.use(express.static('public'))

app.listen(3000, function() {
  console.log('listening on localhost/3000');
});