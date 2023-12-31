import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
  json,
  urlencoded
} from 'express'
import dotenv from 'dotenv'
import { createServer } from 'http'

import { listingRouter } from './Routes/StockListing/index'
import { errorLogger } from './Middlewares/ErrorLogger'

dotenv.config()

const PORT: string = process.env.PORT ?? '3000'

const app: Express = express()

app.use(json())
app.use(
  urlencoded({
    extended: true
  })
)
app.use('/', listingRouter)
app.use('*/', (req: Request, res: Response, next: NextFunction): void => {
  next(new Error('Path not found'))
})
app.use(errorLogger)

const server = createServer(app).on('error', (error) => {
  console.log(error.message)
})
server.listen(PORT)

console.log('server opened on', server.address())
