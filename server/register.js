// registration/register.js
const express = require('express');
const router = express.Router();
const db = require('../server/db');
// const { default: Register } = require('../client/src/Pages/Register');
// const { default: Register } = require('../client/src/Pages/Register');

async function registerUser (req, res) {
  const firstName =req.body.firstName;
  const lastName =req.body.lastName;
  const phoneNumber=req.body.phoneNumber;
  const email =req.body.email;
  const password =req.body.password;


  // Perform validation, sanitization, or other necessary operations on the data

  const user = await {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  };
  console.log(user)

  db.query('INSERT INTO user SET ?', user, (error, results) => {
    if (error) {
      console.error('Error occurred while inserting user:', error);

      res.status(500).json({ error: 'An internal server error occurred' });
    } else {
      console.log('User inserted successfully');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
}

module.exports = registerUser;
