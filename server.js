const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const queries = require('./queries')
const app = express()


//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/hh', (request, response) => {
    response.send('We Did it')
})
app.get('/b', (request, response) => {
    queries.getAll().then(results => response.send(results))
})


// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`app is listening on port: ${port}`)