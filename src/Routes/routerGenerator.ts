import { ENDPOINTS } from 'custom-constants'
import { Router } from 'express'
import { Controllers } from 'types'
import { contextMiddleware } from 'Utils/middlewares'

function routerGenerator(endpoint: typeof ENDPOINTS[number], controllers: Controllers) {
  const router = Router()
  const route = `/${endpoint}`

  router.post(route, contextMiddleware, controllers.add)
  router.put(`${route}/:uid`, contextMiddleware, controllers.update)
  router.delete(`${route}/:uid`, contextMiddleware, controllers.delete)
  router.get([route, `${route}/:uid`], contextMiddleware, controllers.get)

  return router
}

export { routerGenerator }
