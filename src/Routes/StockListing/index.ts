import { Router, type Request, type Response, type NextFunction } from 'express'

const listingRouter: Router = Router()

listingRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction): Response => {
    return res.send({
      message: 'Hello'
    })
  }
)

export { listingRouter }
