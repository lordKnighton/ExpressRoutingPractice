const express = require('express')

const ALLOWED_IPS = ['127.0.0.1', '123.456.7.89']

const api = express.Router()

api.use((req, res, next) => {
    let userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1
    if (!userIsAllowed) {
        res.status(401).send('Not authorized!')
    } else next()
})

api.get('/users', (req, res) => {
    /* something in code */
})
api.post('/user', (req, res) => {
    /* something in code */
})

api.get('/messages', (req, res) => {
    /* something in code */
})
api.post('/message', (req, res) => {
    /* something in code */
})

module.exports = api
