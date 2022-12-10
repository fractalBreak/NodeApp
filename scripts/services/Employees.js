import * as db from './db.js';
import * as helper from '../helper.js';
import config from '../config.js';

export default async function getAllEmployees(page = 1){
  const offset = helper.default(page, config.listPerPage);
  const rows = await db.default(
    `SELECT *
    FROM apointdb.Employee LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

export async function getEmployeeById(id, page = 1){
  console.log('by id called: '+id);
  const offset = helper.default(page, config.listPerPage);
  const rows = await db.default(
    `SELECT *
    FROM apointdb.Employee 
    WHERE id = ${id}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


