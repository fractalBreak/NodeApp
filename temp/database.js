import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getEmployeeList() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM apointdb.employee`)
    return rows
}
async function newEmployee (nameFirst , nameLast , number) {
    const [rows] = await pool.query(`
    INSERT INTO apointdb.employee (nameFirst , nameLast , phoneNumber)
    VALUES (? , ?)
    `, [nameFirst , nameLast , number])
    return rows
}
async function getEmployee (id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM apointdb.employee
    WHERE id = ?
    `, [id])
    return rows
}

const employees = await getEmployeeList();
console.log(employees);
const Johnny = await newEmployee('johhny' , '9041234567');
console.log(Johnny);
const single = await getEmployee(0);
console.log(single);
console.log(employees);