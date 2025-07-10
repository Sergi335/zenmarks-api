import express, { Request, Response } from 'express'
import 'dotenv/config'
import { dbConnect } from './config/mongodb'

const app = express()
export default app
app.use(express.json())
const port = process.env.PORT ?? 3000

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!')
})
void (async () => {
  await dbConnect()
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})()
