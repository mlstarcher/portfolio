const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3050

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.get('/projects', (req, res) => {
  res.redirect('/')
})

app.get('/resume', (req, res) => {
  res.redirect('/')
})

app.get('/contact', (req, res) => {
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})