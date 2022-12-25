import dotenv from 'dotenv'
import express from 'express'
import { rootRouter } from './src/Routes'

dotenv.config()

const app = express()
const port = process.env.PORT

/**
 * Base root router setup
 */
app.use('/', rootRouter)

app.listen(port, () => {
  console.log(`[⚡️][server]: Server is running at http://localhost:${port}`)
})
