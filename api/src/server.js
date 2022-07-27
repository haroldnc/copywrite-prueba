const express = require('express')
const cors = require('cors')
const iecho = require('./routes/iecho')

const server = express()

server.use(cors())

server.use('/iecho', iecho)

module.exports = server
