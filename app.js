import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from'dotenv'
dotenv.config()

import database from './database.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// Create
app.post('/insert', (request, response) => {

})

// Read
app.get('/getAll', (request, response) => {
    response.json({
        success: true
    })
})

// Update

// Delete

app.listen(process.env.PORT, () => console.log('app is running'))