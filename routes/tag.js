import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {
  createTag,
  getTags,
  getTag,
  updateTag,
  deleteTag,
} from '../controllers/tag.js'

const router = Router()

router.get('/', restrict, getTags)
router.get('/:id', restrict, getTag)
router.post('/', restrict, createTag)
router.put('/:id', restrict, updateTag)
router.delete('/:id', restrict, deleteTag)

export default router
