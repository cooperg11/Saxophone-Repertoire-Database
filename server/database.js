import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    connectionLimit : 10,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
}).promise()



export default null

export async function getPieces() {
    const [rows] = await pool.query("SELECT * FROM saxophone_repertoire_list")
    return rows
}

export async function getPiece(title, composer) {
    const [[row]] = await pool.query(`
        SELECT *
        FROM saxophone_repertoire_list
        WHERE Title = ? AND Composer = ?
    `, [title, composer]);
    return row;
}
