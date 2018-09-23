const express = require('express')
const app = express()
const PORT = 3000

app.get('/people-like-you', (req, res) => {
  res.send(req.query)
})

const server = app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}...`)
})
