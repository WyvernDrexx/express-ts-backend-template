import { MainContext } from '../../src/types'

export {}

declare global {
  namespace Express {
    export interface Request {
      ctx: MainContext
    }
  }
}
