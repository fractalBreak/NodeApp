//const express = require('express');
import express from 'express';
//const {readFile} = require('fs');
import {readFile} from 'fs';
import employeesRouter from './routes/Employees.js';

const app = express();
const PORT = 8080;

/* callback method */
//app.use("/css",express.static("./css"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// GET LOGIN PAGE
app.get('/', (request, response) => {
    readFile('./HTML/testbutton.html', 'utf8', (err, html) => {
        if(err){
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })
});

/* Routers */
app.use("/Employees", employeesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

/* promise method 
app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});
*/

app.listen(
    process.env.PORT || PORT, 
    () => console.log(`App available on http://localhost:${PORT}`));