const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const connection = require('./conf');
const moment = require('moment');

const api = express();

api.use(bodyParser.json());

api.use(cors({ origin: '*' }));

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to MYSQL database');
  });

  api.get('/artist', (req,res) =>{
    connection.query(
      'SELECT *  FROM artist',
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  }
  )
  api.get('/spectacle', (req,res) =>{
    connection.query(
      'SELECT *  FROM spectacle',
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  }
  )



api.listen(8000, 'localhost', (err) => {
    if (err) throw err;
    console.log('API is running on localhost:8000');
  });