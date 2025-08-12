import express from 'express'
import { updateRoleToEducator } from '../controllers/educatorController.js'
// import { requireAuth } from '@clerk/express' // Removed for testing

const educatorRouter = express.Router()

// Add Educator Role
// Removed requireAuth() so we can test without authentication
educatorRouter.get('/update-role', updateRoleToEducator)

export default educatorRouter
