// registration/register.js
const express = require('express');
const router = express.Router();
const db = require('../server/db');
// const { default: Register } = require('../client/src/Pages/Register');
// const { default: Register } = require('../client/src/Pages/Register');

async function getsponreg1(req, res) {
    db.query('SELECT * FROM sponreg1 ', (error, results) => {
        if (error) {
        console.error('Error occurred while fetching sponregs:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
        } else {
        res.status(200).json(results);
        console.log('spon1', results);
        }
        
    });

    // db.query('SELECT * FROM sponreg2 ', (error, results) => {
    //     if (error) {
    //         console.error('Error occurred while fetching sponregs:', error);
    //         res.status(500).json({ error: 'An internal server error occurred' });
    //     } else {
    //         // res.status(200).json(results);
    //         console.log('spon2', results);
           
    //     }
    // });

    //   db.query('SELECT * FROM sponreg3 ', (error, results) => {
    //     if (error) {
    //       console.error('Error occurred while fetching sponregs:', error);
    //       res.status(500).json({ error: 'An internal server error occurred' });
    //     } else {
    //     //   res.status(200).json(results);
    //       console.log('spon3', results);
        
    //     }
    //   });
    

   
  }

module.exports = getsponreg1;


