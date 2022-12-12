
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
  })
  .post(async function(req, res, next) {
    console.log('ping!');
    req.on('data', async (data) => {
      // Print the contents of the form
      //console.log(data.toString('utf8'));
      var datetouse = data.toString('utf8')
      console.log(datetouse);
      try {
        res.json(await jobs.getJobByDate(datetouse));
      } catch (err) {
        console.error(`Error while posting jobs: `, err.message);
        next(err);
      }
    }) 
  })
  ;




  
  
  
  
