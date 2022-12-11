//const express = require('express');
import express from 'express';
const app = express();
//const {readFile} = require('fs');
import {readFile} from 'fs';
/* callback method */
app.use("/css",express.static("./css"))
app.get('/', (request, response) => {
    readFile('./css/index.html', 'utf8', (err, html) => {
        if(err){
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })
    

});

/* promise method 
app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});
*/

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));