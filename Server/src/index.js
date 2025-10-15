require('dotenv').config()
const express = require('express')
const cors = require('cors')
const prisma = require('./db')

const authRouter = require('./routes/auth')
const postsRouter = require('./routes/posts')
const tutorialsRouter = require('./routes/tutorials')
const uploadsRouter = require('./routes/uploads')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/posts', postsRouter)
app.use('/tutorials', tutorialsRouter)
app.use('/uploads', uploadsRouter)

// simple health
app.get('/health', (req, res) => res.json({ ok: true }))

app.listen(PORT, () => console.log(`Admin API listening on ${PORT}`))
