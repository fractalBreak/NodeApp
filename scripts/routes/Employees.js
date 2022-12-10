
import express from 'express';
import * as employees from '../services/Employees.js';
const employeeRouter = express.Router();
export default employeeRouter;

/*
employeeRouter.route('/')
  .get((req, res) => {
    res.send('hi get employees');
  });
*/

/* GET */
employeeRouter.route('/')
  .get(async function(req, res, next) {
    //console.log('ping!');
      try {
        res.json(await employees.default(req.query.page));
      } catch (err) {
        console.error(`Error while getting all employees: `, err.message);
        next(err);
      }
  });
  
  
