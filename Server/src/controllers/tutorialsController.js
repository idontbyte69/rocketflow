const prisma = require('../db')
let sanitizeHtml
try { sanitizeHtml = require('sanitize-html') } catch (e) { sanitizeHtml = null }

function safeSanitize(dirty) {
  if (!dirty) return ''
  if (sanitizeHtml) {
    return sanitizeHtml(dirty, {
      allowedTags: [ 'h1','h2','h3','h4','h5','h6','blockquote','p','a','ul','ol','nl','li','b','i','strong','em','pre','code','br','hr' ],
      allowedAttributes: { a: [ 'href', 'target', 'rel' ] },
      allowedSchemesByTag: { a: [ 'http','https','mailto' ] }
    })
  }
  return dirty.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
}

function normalizeSteps(s) {
  if (!s) return []
  if (Array.isArray(s)) return s
  if (typeof s === 'string') {
    try { const p = JSON.parse(s); return Array.isArray(p) ? p : [p] } catch (e) { return s.split('\n').map(l=>l.trim()).filter(Boolean) }
  }
  return []
}

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
  try {
    const body = req.body || {}
    const title = (body.title || '').toString().trim()
    let slug = (body.slug || '').toString().trim()
    const excerpt = (body.excerpt || '').toString()
    let content = body.content || ''
    const author = (body.author || 'Admin').toString()
    const tags = body.tags
    const videoUrl = body.videoUrl || null
    const steps = normalizeSteps(body.steps)

    if (!title) return res.status(400).json({ error: 'Title is required' })
    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') || `tutorial-${Date.now()}`
    }
    if (content) content = safeSanitize(content)

    const data = { title, slug, excerpt: excerpt || '', content: content || '', author, tags: tags || [], videoUrl, steps }
    const item = await prisma.tutorial.create({ data })
    return res.status(201).json(item)
  } catch (err) {
    console.error('Create tutorial error', err && err.message ? err.message : err)
    if (err && err.code === 'P2002') return res.status(409).json({ error: 'Slug already exists' })
    return res.status(500).json({ error: err && err.message ? err.message : 'Create failed' })
  }
}

exports.update = async (req, res) => {
  try {
    const body = req.body || {}
    if (body.content) body.content = safeSanitize(body.content)
    if (body.steps) body.steps = normalizeSteps(body.steps)
    const item = await prisma.tutorial.update({ where: { slug: req.params.slug }, data: body })
    res.json(item)
  } catch (err) {
    console.error('Update tutorial error', err)
    if (err && err.code === 'P2025') return res.status(404).json({ error: 'Tutorial not found' })
    return res.status(500).json({ error: err && err.message ? err.message : 'Update failed' })
  }
}

exports.remove = async (req, res) => {
  await prisma.tutorial.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
}
