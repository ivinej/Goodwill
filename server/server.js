const express = require('express');
const router = express.Router();
const app = express();
const registerUser = require('../server/register');
const loginuser = require('../server/login');

const PORT = 5000;
const cors = require('cors')
// router.use(cors()); 
app.use(cors())
app.use(express.json());


app.get('/register', (req, res) => {
  res.send('Server is working!'); 
});
app.post('/register', registerUser);
app.get('/login', loginuser);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
