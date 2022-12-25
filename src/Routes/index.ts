import { Router } from 'express'
import { booksControllers, userControllers } from '../Controllers'
import { routerGenerator } from './routerGenerator'

const rootRouter = Router()

const userRouter = routerGenerator('users', userControllers)
const booksRouter = routerGenerator('books', booksControllers)

rootRouter.use(userRouter)
rootRouter.use(booksRouter)

export { rootRouter }
