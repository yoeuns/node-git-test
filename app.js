//app.js
var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`start! express server on http://localhost:${PORT}`);
});