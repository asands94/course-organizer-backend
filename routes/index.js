import { Router } from 'express'
import userRoutes from './user.js'
import courseRoutes from './course.js'
import tagRoutes from './tag.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root'))

router.use('/', userRoutes)
router.use('/course', courseRoutes)
router.use('/tag', tagRoutes)

export default router
