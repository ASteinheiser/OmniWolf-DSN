const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 80

app.use(express.static(path.join(__dirname, 'dist')))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, function (err) {
  if (err) return console.log(err)
  console.log(`Running at http://localhost:${PORT}`)
})
