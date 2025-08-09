const express = require('express')
const fs = require('fs')
const app = express()

console.log('hello bitch')

app.get('/', (request, response) => {

    fs.readFile('./index.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('Oots!')
        }

        response.send(html);

    })

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))