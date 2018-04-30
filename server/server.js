const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
