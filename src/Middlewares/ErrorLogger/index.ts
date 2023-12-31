import { type NextFunction, type Request, type Response } from 'express'

const errorLogger = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const status = 500
  const message = error.message
  return res.status(status).send({
    message
  })
}

export { errorLogger }
