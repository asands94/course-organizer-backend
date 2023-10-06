import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import { createCourse, getCourses, getCourse } from '../controllers/course.js'

const router = Router()

router.get('/', restrict, getCourses)
router.get('/:id', restrict, getCourse)
router.post('/', restrict, createCourse)

export default router
