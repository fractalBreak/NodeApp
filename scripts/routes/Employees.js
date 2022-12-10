
import express from 'express';
const employeeRouter = express.Router();
import * as employees from '../services/Employees.js';

/* GET */
export default employeeRouter.get('/Employees', async function(req, res, next) {
    try {
      res.json(await employees.default(req.query.page));
    } catch (err) {
      console.error(`Error while getting all employees: `, err.message);
      next(err);
    }
});
  
