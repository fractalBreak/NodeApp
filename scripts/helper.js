import config from './config.js';

// helper functions for API router
export default function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
export function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

// get database name
export function getHostName(){
  return config.db.host;
}
