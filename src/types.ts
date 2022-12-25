import { Request, Response } from 'express'

export type MainContext = {
  isNull: boolean
}

export type Controllers = {
  get: (req: Request<{ uid?: string }>, res: Response) => void
  add: (req: Request, res: Response) => void
  update: (req: Request<{ uid: string }>, res: Response) => void
  delete: (req: Request<{ uid: string }>, res: Response) => void
}
