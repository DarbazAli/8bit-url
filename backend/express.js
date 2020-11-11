import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compress from 'compression'
import path from 'path'
import { config } from 'dotenv'

// custom moduels
import apiUrl from './routes/apiRoute.js'

// initialize app
const app = express()
config() // dotenv
// configer express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
// app.use(helmet())
// app.use(cors())

console.log(process.env.NODE_ENV)

app.use('/', apiUrl)

// use statics
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  // setup routes
  app.get('/', (req, res) => {
    res.status(200).send('API is working..')
  })
}

// export for usage
export default app
