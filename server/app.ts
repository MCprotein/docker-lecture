import express from 'express'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(router)

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})