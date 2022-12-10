
import express from 'express';
import * as jobs from '../services/jobs.js';
const jobsRouter = express.Router();
export default jobsRouter;

/*
jobsRouter.route('/')
  .get((req, res) => {
    res.send('hi get jobs');
  });
*/


/* Job Routes */
jobsRouter.route('/')
  .get(async function(req, res, next) {
    //console.log('ping!');
      try {
        res.json(await jobs.default(req.query.page));
      } catch (err) {
        console.error(`Error while getting all jobs: `, err.message);
        next(err);
      }
  });
  
  
  
