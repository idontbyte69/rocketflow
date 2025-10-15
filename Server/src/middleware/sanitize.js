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
          const href = attribs.href || ''
          if (href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            attribs.rel = 'nofollow noopener noreferrer'
            attribs.target = '_blank'
          }
          return { tagName: 'a', attribs }
        },
        'iframe': function(tagName, attribs) {
          const src = (attribs && attribs.src) || ''
          const allowed = /(?:youtube\.com|youtu\.be|vimeo\.com)/i.test(src)
          if (!allowed) {
            return { tagName: 'a', attribs: { href: src || '#', rel: 'nofollow noopener noreferrer', target: '_blank' } }
          }
          attribs.sandbox = attribs.sandbox || 'allow-scripts allow-same-origin'
          attribs.referrerpolicy = attribs.referrerpolicy || 'no-referrer'
          return { tagName: 'iframe', attribs }
        }
      }
    })
  }

  let out = dirty.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
  out = out.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
  out = out.replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
  return out
}

module.exports = function sanitizeMiddleware(req, res, next) {
  try {
    if (req.body && typeof req.body === 'object') {
      // commonly used field for editor content
      if (req.body.content && typeof req.body.content === 'string') {
        req.body.content = safeSanitize(req.body.content)
      }
      // if you use other fields (contentHtml, bodyHtml), add them here
      if (req.body.contentHtml && typeof req.body.contentHtml === 'string') {
        req.body.contentHtml = safeSanitize(req.body.contentHtml)
      }
    }
  } catch (err) {
    console.warn('Sanitize middleware error', err.message)
  }
  next()
}
