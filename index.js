//const express = require('express');
import express from 'express';
const app = express();
const PORT = 8080;
//const {readFile} = require('fs');
import {readFile} from 'fs';
/* callback method */
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err){
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })

});

app.get('/tshirt', (request, response) => {
    response.send()
});
/* promise method 
app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});
*/

app.listen(
    process.env.PORT || PORT, 
    () => console.log(`pp available on http://localhost:${PORT}`));