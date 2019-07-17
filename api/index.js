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
  api.get('/goldenbook', (req,res) =>{
    connection.query(
      'SELECT *  FROM goldenBook',
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

  api.post('/spectacle',(req,res)=>{
    const reservation = req.body
    connection.query(
      `INSERT INTO registrations (firstname,lastname,quantity_adult,quantity_children ) VALUES ('${ reservation.firstName}','${reservation.lastName}','${reservation.quantityAdult}','${reservation.quantityChildren}')`,
      (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.sendStatus(200)
            }
          })

  })
  api.post('/spectaclecompagny',(req,res)=>{
    const reservation = req.body
    connection.query(
      `INSERT INTO compagny_registration (referent,compagny_name,quantity_adult,quantity_children ) VALUES ('${ reservation.referent}','${reservation.compagnyName}','${reservation.numberAdult}','${reservation.numberChildren}')`,
      (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.sendStatus(200)
            }
          })

  })
  api.post('/goldenbook',(req,res)=>{
    const comment = req.body
    connection.query(
      `INSERT INTO goldenBook (pseudo,comment,date_comment ) VALUES ('${ comment.pseudo}','${comment.comment}','${moment(comment.date_comment).format("YYYY-MM-DD HH:mm:ss")}')`,
      (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.sendStatus(200)
            }
          })

  })




api.listen(8000, 'localhost', (err) => {
    if (err) throw err;
    console.log('API is running on localhost:8000');
  });