require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./router/index.js')
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api', route)

const production = process.env.NODE_ENV?.trim()

if (production === 'production') {
  console.log("You've run a producition build!")
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('/*', (req, res) => {
    //! '/*' - звёздочка нужна для того, чтобы роутинг работал на статичной версии сайта (то есть в продакшене).
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server started working on port ${PORT}`)
})
