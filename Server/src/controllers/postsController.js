const prisma = require('../db')

exports.list = async (req, res) => {
  const posts = await prisma.post.findMany({ orderBy: { date: 'desc' } })
  res.json(posts)
}

exports.get = async (req, res) => {
  const post = await prisma.post.findUnique({ where: { slug: req.params.slug } })
  if (!post) return res.status(404).json({ error: 'Not found' })
  res.json(post)
}

exports.create = async (req, res) => {
  const data = req.body
  const post = await prisma.post.create({ data })
  res.json(post)
}

exports.update = async (req, res) => {
  const data = req.body
  const post = await prisma.post.update({ where: { slug: req.params.slug }, data })
  res.json(post)
}

exports.remove = async (req, res) => {
  await prisma.post.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
}
