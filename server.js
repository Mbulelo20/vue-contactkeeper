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
app.get('/contacts', (request, response) => {
    queries.getAll().then(data => response.send(data))
})

router.route('/user')                                   // set up user route
    .post(function(req, res) {                          // listen for a post on user
        console.log(' -Post -');                        // report a post
        knex('user').insert({email: req.body.email}).then( function (result) {
            res.json({ success: true, message: 'ok' });     // respond back to request
         })   // respond back to request
    });
app.use('/api', router); 

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`app is listening on port: ${port}`)