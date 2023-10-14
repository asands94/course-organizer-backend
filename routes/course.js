import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  addTagToCourse,
  removeTagFromCourse,
} from '../controllers/course.js'

const router = Router()

router.get('/', restrict, getCourses)
router.get('/:id', restrict, getCourse)
router.post('/', restrict, createCourse)
router.post('/:courseId/:tagId', restrict, addTagToCourse)
router.delete('/:courseId/:tagId', restrict, removeTagFromCourse)
router.put('/:id', restrict, updateCourse)
router.delete('/:id', restrict, deleteCourse)

export default router
