const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const port = 3000
const app = express()
const config = require('./webpack.dev')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(port, () => {
  console.log(`server now listen at port ${port}!\n`)
})
