import { Router } from 'express'
import userRoutes from './user.js'
import courseRoutes from './course.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root'))

router.use('/', userRoutes)
router.use('/course', courseRoutes)

export default router
