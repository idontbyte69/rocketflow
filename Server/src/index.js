require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ error: 'Missing Authorization header' })
  const token = auth.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

// Auth
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(401).json({ error: 'Invalid credentials' })
  const ok = await bcrypt.compare(password, user.password)
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' })
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
})

// Users (admin only)
app.post('/users', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' })
  const { email, password, name, role } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { email, password: hashed, name, role } })
  res.json(user)
})

// Posts CRUD
app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({ orderBy: { date: 'desc' } })
  res.json(posts)
})

app.get('/posts/:slug', async (req, res) => {
  const post = await prisma.post.findUnique({ where: { slug: req.params.slug } })
  if (!post) return res.status(404).json({ error: 'Not found' })
  res.json(post)
})

app.post('/posts', authMiddleware, async (req, res) => {
  const data = req.body
  const post = await prisma.post.create({ data })
  res.json(post)
})

app.put('/posts/:slug', authMiddleware, async (req, res) => {
  const data = req.body
  const post = await prisma.post.update({ where: { slug: req.params.slug }, data })
  res.json(post)
})

app.delete('/posts/:slug', authMiddleware, async (req, res) => {
  await prisma.post.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
})

// Tutorials CRUD
app.get('/tutorials', async (req, res) => {
  const items = await prisma.tutorial.findMany({ orderBy: { date: 'desc' } })
  res.json(items)
})

app.get('/tutorials/:slug', async (req, res) => {
  const item = await prisma.tutorial.findUnique({ where: { slug: req.params.slug } })
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
})

app.post('/tutorials', authMiddleware, async (req, res) => {
  const data = req.body
  const item = await prisma.tutorial.create({ data })
  res.json(item)
})

app.put('/tutorials/:slug', authMiddleware, async (req, res) => {
  const data = req.body
  const item = await prisma.tutorial.update({ where: { slug: req.params.slug }, data })
  res.json(item)
})

app.delete('/tutorials/:slug', authMiddleware, async (req, res) => {
  await prisma.tutorial.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
})

// simple health
app.get('/health', (req, res) => res.json({ ok: true }))

app.listen(PORT, () => console.log(`Admin API listening on ${PORT}`))
