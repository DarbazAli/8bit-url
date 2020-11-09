'use strict'
console.clear()

import mongoose from 'mongoose'
import app from './express.js'
import config from '../config/config.js'

// connect to database
mongoose.Promise = global.Promise
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`MongoDB connected at ${config.mongoUri}`)
  })
  .catch((err) => {
    console.log(err)
  })

// listen for requests
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
