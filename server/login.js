// registration/register.js
const express = require('express');
const router = express.Router();
const db = require('../server/db');
// const { default: Register } = require('../client/src/Pages/Register');
// const { default: Register } = require('../client/src/Pages/Register');

async function getUsers(req, res) {
    db.query('SELECT * FROM user', (error, results) => {
      if (error) {
        console.error('Error occurred while fetching users:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
      } else {
        res.status(200).json(results);
        console.log(results);
      }
    });
  }

module.exports = getUsers;
