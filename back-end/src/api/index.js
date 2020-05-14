import { Router } from 'express'

import post from './post'

const routes = Router()

routes.use('/post', post)

export default routes
