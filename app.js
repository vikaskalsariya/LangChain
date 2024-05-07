const express = require("express")
const app = express()
require('dotenv').config()
const port = 3000
app.use('/', require("./router/index.js"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})