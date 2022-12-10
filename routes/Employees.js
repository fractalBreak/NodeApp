//import {express} from 'express';
import express from 'express';
const router = express.Router();
import * as employees from '../services/Employees.js';

/* GET */
export default router.get('/', async function(req, res, next) {
    try {
      res.json(await employees.default(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
  
