const express = require('express')
var getRouter = require('./routes/getRouter')
const app = express()
const port = 7000

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use('/get', getRouter);
