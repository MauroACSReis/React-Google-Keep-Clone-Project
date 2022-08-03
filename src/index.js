// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// Render
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)
//////////////////////////////////////////////////
// https://l1pp6.csb.app
//////////////////////////////////////////////////
// require modules
const express = require('express')

// start express
const app = express()

// GET
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/app', function (req, res) {
  res.sendFile(__dirname + '/app.jsx')
})

app.get('/Footer', function (req, res) {
  res.sendFile(__dirname + '/Footer.jsx')
})

app.get('/Header', function (req, res) {
  res.sendFile(__dirname + '/Header.jsx')
})

// LISTEN to port
const port = 3000
app.listen(process.env.PORT || 3000, function () {
  console.log(`Server started at port ${port}.`)
}) // Heroku OR localhost:3000
