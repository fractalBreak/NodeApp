import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'SA_main',
    password: 'Welcome123!',
    database: 'test_schema'
}).promise();

async function getTestTable() {
    const [rows] = await pool.query("SELECT * FROM test_schema.test_table");
    return rows;
}
const testTable = await getTestTable();
console.log(testTable);
