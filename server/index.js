const express = require('express')
var Rollbar = require('rollbar')
var rollbar = new Rollbar('d60c83b75da64c969cc075b85aeaa54a')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/styles', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/css/index.css'));
});

app.get('/something', function(req, res) {
  doSomething()
  res.sendStatus(400)
})

app.get('/error', function(req, res) {
  rollbar.error('Uh oh, this is a custom error.')
  res.sendStatus(400)
})

app.get('/warning', function(req, res) {
  rollbar.warning('Someone hit the warning page...')
  res.sendStatus(200)
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})