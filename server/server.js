import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import bodyParser from 'body-parser' // <-- import here

const app = express()

// Wrap in an async IIFE to use await at the top level
;(async () => {
  await connectDB()

  app.use(cors())

  app.get('/', (req, res) => res.send("API Working"))

  // Use raw body parser ONLY for this webhook route
  app.post(
    '/clerk',
    bodyParser.raw({ type: 'application/json' }),
    clerkWebhooks
  )

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
})()

