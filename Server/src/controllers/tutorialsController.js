const prisma = require('../db')

exports.list = async (req, res) => {
  const items = await prisma.tutorial.findMany({ orderBy: { date: 'desc' } })
  res.json(items)
}

exports.get = async (req, res) => {
  const item = await prisma.tutorial.findUnique({ where: { slug: req.params.slug } })
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
}

exports.create = async (req, res) => {
  const data = req.body
  const item = await prisma.tutorial.create({ data })
  res.json(item)
}

exports.update = async (req, res) => {
  const data = req.body
  const item = await prisma.tutorial.update({ where: { slug: req.params.slug }, data })
  res.json(item)
}

exports.remove = async (req, res) => {
  await prisma.tutorial.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
}
