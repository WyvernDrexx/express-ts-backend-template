import { NextFunction, Request, Response } from 'express'

const contextMiddleware = (req: Request, _: Response, next: NextFunction) => {
  if (!req.ctx) req.ctx = { isNull: true }
  if (req.params.uid) req.ctx.isNull = false
  next()
}

export { contextMiddleware }
