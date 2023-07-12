const express = require('express');
const router = express.Router();
const app = express();
const registerUser = require('../server/register');
const sponReg = require('../server/sponreg');
const loginuser = require('../server/login');
const spon =require('../server/spon');
const PORT = 5000;
const cors = require('cors')
// router.use(cors()); 
app.use(cors())
app.use(express.json());


app.get('/register', (req, res) => {
  res.send('Server is working!'); 
});
app.post('/register', registerUser);
app.post('/sponreg', sponReg )
app.get('/login', loginuser);
app.get('/spondata',spon);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});