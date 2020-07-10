'use strict';

const express = require('express');
const { response } = require('express');

//bring in the dotenv lirary
require('dotenv').config();

const app = express();

//this let us serve a web site from a directory
app.use(express.static('./public'));
// the doenv li lets
const PORT = process.env.PORT;
 
app.get('/', function (request, response) {
  response.send('Hello World')
})

app.get('/bananas',(request, reponse) => {

  response.send('I am bananas about bananas');
});

// app.listen(PORT);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
// app.listen(3000)