import mysql from "mysql"

export const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : process.env.MYSQLDB_PASSWORD,
    database : process.env.MYSQLDB_DATABASE,
    port : process.env.MYSQLDB_PORT
})