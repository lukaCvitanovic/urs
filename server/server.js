const express = require('express')
const router = require('express').Router()
const server = express()
const bodyparser = require('body-parser')
const port = 9000

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))

server.listen(port, ()=> {
    console.log(`Server listeing on  ${port}`)
    })

server.post('/', com)

function com(req, res) {
    console.log(req)
}