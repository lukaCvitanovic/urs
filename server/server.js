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

var ips

function com(req, res) {
    if (req.body != undefined && req.body.data === 'mobile') {
        ips.send(req.body.action)
    }
    else if (req.body != undefined && req.body.data === 'dev') {
        ips = req
    }
}