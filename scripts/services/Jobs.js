import * as db from './db.js';
import * as helper from '../helper.js';
import config from '../config.js';

export default async function getAllJobs(page = 1){
  const offset = helper.default(page, config.listPerPage);
  const rows = await db.default(
    `SELECT *
    FROM apointdb.job LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

export async function getJobByDate(input){
  console.log('gettingJobByDate! date: '+input);
  const rows = await db.default(
    `SELECT *
    FROM apointdb.job
    where DATE(job_start) = DATE('${input}')`
  )
  console.log(rows);
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

