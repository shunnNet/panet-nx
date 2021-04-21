const express = require('express')
const app = express()
const api = require('./router/api.js')
const auth = require('./router/auth.js')
require('./mock.js')

app.use(express.json()) // json
app.use(express.urlencoded({ extended: false })) //application/x-www-form-urlencoded

app.use('/', api)
app.use("/auth", auth)

module.exports = app
