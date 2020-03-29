const express = require('express');
const app = express();
// const router = require('./routes.js')
const port = 3004;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/footer', router)

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Listening on port: ${port}`))