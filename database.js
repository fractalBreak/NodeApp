import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Bobcat777!',
    database: 'apointdb'
}).promise();

async function getTestTable() {
    const [rows] = await pool.query("SELECT * FROM apointdb.users");
    return rows;
}

async function getTestable() {
    const [rows] = await pool.query("INSERT INTO `apointdb`.`users` (`UserName`, `UserPass`) VALUES ('Bob', 'wordpass');");
    return rows;
}

//delete row = DELETE FROM `apointdb`.`users` WHERE (`UserID` = '3');
const testTable = await getTestTable();
console.log(testTable);
const testable = await getTestable();
console.log(testable);
const testTable2 = await getTestTable();
console.log(testTable2);
