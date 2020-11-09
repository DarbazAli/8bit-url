import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compress from 'compression'

// initialize app
const app = express()

// configer express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

// setup routes
app.get('/', (req, res) => {
  res.status(200).send('API is working..')
})

// export for usage
export default app
