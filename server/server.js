import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import bodyParser from 'body-parser' // <-- import here
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'

const app = express()

// Wrap in an async IIFE to use await at the top level
;(async () => {
  await connectDB()
  // Middlewares 
  app.use(cors())
  app.use(clerkMiddleware())

  app.get('/', (req, res) => res.send("API Working"))

  // Use raw body parser ONLY for this webhook route
  app.post(
    '/clerk',
    bodyParser.raw({ type: 'application/json' }),
    clerkWebhooks
  )
  
  app.use('/api/educator', express.json(), educatorRouter)  // <-- fixed here

  const PORT = process.env.PORT || 7000
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
})()
