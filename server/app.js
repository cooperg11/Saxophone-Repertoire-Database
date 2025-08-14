import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
import mysql from 'mysql2'
import dotenv from'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname, '../public')

const pool = mysql.createPool({
    connectionLimit : 10,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
})

app.use(cors())
app.use(express.json())
app.use(express.static(publicPath))

//GET json list of all pieces
app.get('/pieces', (req, res) => {
    const q = "SELECT * FROM saxophone_repertoire_list ORDER BY Title ASC"
    pool.query(q, (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: "Failed to query for all pieces"})
        }
        return res.status(200).json(data)
    })
})

app.get('/individual_piece', (req, res) => {
    const q = "SELECT * FROM saxophone_repertoire_list WHERE Title = ? and Composer = ?"
    pool.query(q, [req.query.Title, req.query.Composer], (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: "Failed to query for individual piece"})
        }
        return res.status(200).json(data)
    })
})

const portNumber = process.env.PORT || 8080
app.listen(portNumber || 8080, () => {
    console.log("Connected at http://localhost:" + portNumber.toString())
})
