import express from 'express'

import { getPieces, getPiece } from './database.js'

const app = express()

app.use(express.json())

app.get("/saxophone_repertoire_list", async (req, res) => {
    const pieces = await getPieces()
    res.send(pieces)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})