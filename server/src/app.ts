import express from 'express'
import dayjs from 'dayjs'
import { PrismaClient } from '@prisma/client'
import { logger } from '../utils/logger'

async function main() {
  const prisma = new PrismaClient()

  const app = express()
  const router = express.Router()

  router.get('/', (req, res) => {
    logger.info(process.env.PORT)
    res.send(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  })

  router.get('/create', async (req, res) => {
    const result = await prisma.user.create({
      data: {
        email: String(+new Date()) + '@prisma.io',
        name: String(+new Date())
      }
    })

    res.json(result)
  })

  app.use(router)

  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000')
  })
}

main()
