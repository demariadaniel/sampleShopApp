const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// EXPRESS
app.listen(8080, () => {
  console.log(`Server Started on Port 8080}`);
  console.log('Press CTRL + C to stop server');
});

let cart = [];

app.get('/cart', (req, res) => {
  console.log('GET', cart)
  res.send(cart)
})

app.post('/cart', (req, res) => {
  cart = req.body
  console.log('POST', cart)
  res.send('Updated')
})

app.get('/clear', (req, res) => {
  cart = []
  res.send('cleared')
})