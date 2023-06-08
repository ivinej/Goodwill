const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/test', (req, res) => {
  res.send('Server is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
