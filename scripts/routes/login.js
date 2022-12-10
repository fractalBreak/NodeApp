import express from 'express';
import {readFile} from 'fs';
const router = express.Router();
import * as login from '../services/login.js';

// GET LOGIN PAGE
export default router.get('/', async (request, response) => {
    readFile('./HTML/login.html', 'utf8', (err, html) => {
        if(err){
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })
});
/* 
export default router.get('/', async function(req, res, next) {
    try {
      res.json(await login.default(req.query.page));
    } catch (err) {
      console.error(`Error while getting all employees: `, err.message);
      next(err);
    }
});
*/
  
