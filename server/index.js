const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, (err) => {
  if (err) { console.log(err); }
  else { console.log('Server connected on port:', PORT)}
});