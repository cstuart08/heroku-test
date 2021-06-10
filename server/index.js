const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/styles', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/css/index.css'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})