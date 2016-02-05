'use strict'

const fs = require('fs')
const pdf = require('html-pdf')

const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/pdf', (req, res) => {
  html2pdf()
  res.sendFile(__dirname + '/public/data/students.pdf')
  // const html = fs.readFileSync('./public/index.html', 'utf8')
  // const options = {
  //   format: 'A4',
  //   orientation: 'landscape'
  // }
  // pdf.create(html, options)
  //   .toFile('./public/data/students.pdf', (err, res) => {
  //     if (err) return console.log(err)
  //     res.sendFile(__dirname + '/public/data/students.pdf')
  //   })
})

function html2pdf () {
  const html = fs.readFileSync('./public/index.html', 'utf8')
  const options = {
    format: 'A4',
    orientation: 'landscape'
  }
  pdf.create(html, options)
    .toFile('./public/data/students.pdf', (err, res) => {
      if (err) return console.log(err)
    })
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening on localhost:3000')
})
