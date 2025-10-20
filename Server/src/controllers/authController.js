const prisma = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.warn(`Auth: login failed - user not found for email=${email}`)
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const ok = await bcrypt.compare(password, user.password)
  if (!ok) {
    console.warn(`Auth: login failed - incorrect password for email=${email}`)
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
}

exports.signup = async (req, res) => {
  const { email, password, name } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    console.warn(`Auth: signup failed - user already exists email=${email}`)
    return res.status(409).json({ error: 'User already exists' })
  }
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { email, password: hashed, name, role: 'admin' } })
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
}
