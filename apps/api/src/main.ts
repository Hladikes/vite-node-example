import express from 'express'
import { getData } from 'shared/request'

const app = express()
const PORT = 8000

app.get('/', async (_, res) => {
  const data = await getData()
  res.json(data).end()
})

app.listen(PORT, () => {
  console.log(`[i] Server is running at :${PORT}`)
})