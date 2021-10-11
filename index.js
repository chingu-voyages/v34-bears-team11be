const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, strangers!');
})

app.listen(PORT, () => {
  console.log(`App is listening at port: ${PORT}`);
})