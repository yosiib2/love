import express from 'express';
import { addCourse, getEducatorCourses, updateRoleToEducator } from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { protectEducator } from '../middlewares/authMiddleware.js';
// import { requireAuth } from '@clerk/express'; // Removed for testing

const educatorRouter = express.Router();

// Add Educator Role
// Removed requireAuth() so we can test without authentication
educatorRouter.get('/update-role', updateRoleToEducator);

// Add New Course (with image upload and educator protection)
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse);

// Get Educator Courses
educatorRouter.get('/courses', protectEducator, getEducatorCourses);

export default educatorRouter;
