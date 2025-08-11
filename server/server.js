import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize Express
const app = express()
await connectDB()

// Middlewares
app.use(cors())

// Basic test route
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json(),clerkWebhooks)

// Port setup
const PORT = process.env.PORT || 7000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
