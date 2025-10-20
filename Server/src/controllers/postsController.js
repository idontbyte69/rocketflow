const prisma = require('../db')
let sanitizeHtml
try {
  sanitizeHtml = require('sanitize-html')
} catch (e) {
  sanitizeHtml = null
}

function safeSanitize(dirty) {
  if (!dirty) return ''
  if (sanitizeHtml) {
    return sanitizeHtml(dirty, {
      allowedTags: [ 'h1','h2','h3','h4','h5','h6','blockquote','p','a','ul','ol','nl','li','b','i','strong','em','img','figure','figcaption','pre','code','br','hr', 'table','thead','tbody','tr','td','th','video','source','iframe' ],
      allowedAttributes: {
        a: [ 'href', 'name', 'target', 'rel' ],
        img: [ 'src', 'alt', 'title', 'width', 'height' ],
        iframe: [ 'src', 'width', 'height', 'allow', 'allowfullscreen', 'frameborder', 'loading', 'referrerpolicy', 'sandbox' ],
        video: [ 'src', 'controls', 'width', 'height' ],
        source: [ 'src', 'type' ],
      },
      allowedSchemesByTag: {
        img: [ 'http', 'https', 'data' ],
        a: [ 'http', 'https', 'mailto' ],
        iframe: [ 'http', 'https' ],
      },
      transformTags: {
        'a': function(tagName, attribs) {
          // force rel and target for external links
          const href = attribs.href || ''
          if (href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            attribs.rel = 'nofollow noopener noreferrer'
            attribs.target = '_blank'
          }
          return { tagName: 'a', attribs }
        },
        'iframe': function(tagName, attribs) {
          const src = (attribs && attribs.src) || ''
          // allow only common video hosts (YouTube, Vimeo)
          const allowed = /(?:youtube\.com|youtu\.be|vimeo\.com)/i.test(src)
          if (!allowed) {
            // transform disallowed iframe into a safe link
            return { tagName: 'a', attribs: { href: src || '#', rel: 'nofollow noopener noreferrer', target: '_blank' } }
          }
          // ensure sandbox/referrerpolicy for allowed iframes
          attribs.sandbox = attribs.sandbox || 'allow-scripts allow-same-origin'
          attribs.referrerpolicy = attribs.referrerpolicy || 'no-referrer'
          return { tagName: 'iframe', attribs }
        }
      }
    })
  }

  // Fallback sanitizer: remove script/style tags and on* attributes
  let out = dirty.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
  out = out.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
  // remove on* attributes like onclick
  out = out.replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
  return out
}

// export for testing
exports.safeSanitize = safeSanitize

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
  try {
    const body = req.body || {}

    // basic validation
    const title = (body.title || '').toString().trim()
    let slug = (body.slug || '').toString().trim()
    const excerpt = (body.excerpt || '').toString()
    let content = body.content || ''
    const featuredImage = body.featuredImage || null
    const author = (body.author || 'Admin').toString()
    const tags = body.tags

    if (!title) return res.status(400).json({ error: 'Title is required' })
    if (!slug) {
      // derive slug from title if not provided
      slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') || `post-${Date.now()}`
    }

    // sanitize content before saving
    if (content) content = safeSanitize(content)

    // normalize tags to an array (JSON field in prisma)
    function normalizeTags(t) {
      if (!t) return []
      if (Array.isArray(t)) return t
      if (typeof t === 'string') {
        try {
          const parsed = JSON.parse(t)
          return Array.isArray(parsed) ? parsed : parsed ? [parsed] : []
        } catch (e) {
          // comma separated fallback
          return t.split(',').map(s => s.trim()).filter(Boolean)
        }
      }
      return []
    }

    const data = {
      title,
      slug,
      excerpt: excerpt || '',
      content: content || '',
      featuredImage,
      author,
      tags: normalizeTags(tags)
    }

    const post = await prisma.post.create({ data })
    return res.status(201).json(post)
  } catch (err) {
    console.error('Create post error', err && err.message ? err.message : err)
    // handle unique constraint (slug) from Prisma
    if (err && err.code === 'P2002') {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    return res.status(500).json({ error: err && err.message ? err.message : 'Create failed' })
  }
}

exports.update = async (req, res) => {
  try {
    const body = req.body || {}
    if (body.content) body.content = safeSanitize(body.content)

    // normalize tags similar to create
    function normalizeTags(t) {
      if (!t) return []
      if (Array.isArray(t)) return t
      if (typeof t === 'string') {
        try {
          const parsed = JSON.parse(t)
          return Array.isArray(parsed) ? parsed : parsed ? [parsed] : []
        } catch (e) {
          return t.split(',').map(s => s.trim()).filter(Boolean)
        }
      }
      return []
    }

    const updateData = { ...body }
    if (body.tags) updateData.tags = normalizeTags(body.tags)

    const post = await prisma.post.update({ where: { slug: req.params.slug }, data: updateData })
    res.json(post)
  } catch (err) {
    console.error('Update post error', err)
    if (err && err.code === 'P2025') {
      return res.status(404).json({ error: 'Post not found' })
    }
    return res.status(500).json({ error: err && err.message ? err.message : 'Update failed' })
  }
}

exports.remove = async (req, res) => {
  await prisma.post.delete({ where: { slug: req.params.slug } })
  res.json({ ok: true })
}
