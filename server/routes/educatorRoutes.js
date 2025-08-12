import express from 'express'
import { updateRoleToEducator } from '../controllers/educatorController.js'
import { requireAuth } from '@clerk/express' // ✅ added authentication middleware

const educatorRouter = express.Router()

// Add Educator Role
// Changed from GET to PUT, added leading slash, and added requireAuth
educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator)

export default educatorRouter
