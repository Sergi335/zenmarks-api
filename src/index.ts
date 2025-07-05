import express from 'express'
import 'dotenv/config'

const app = express()
export default app
app.use(express.json())
const port = process.env.PORT ?? 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
