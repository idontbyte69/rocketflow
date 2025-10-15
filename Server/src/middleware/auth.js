const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) {
    console.warn('Auth middleware: missing Authorization header')
    return res.status(401).json({ error: 'Missing Authorization header' })
  }

  if (!auth.startsWith('Bearer ')) {
    console.warn('Auth middleware: Authorization header not in Bearer format:', auth)
    return res.status(401).json({ error: 'Authorization header must be Bearer <token>' })
  }

  const token = auth.split(' ')[1]
  if (!token) {
    console.warn('Auth middleware: Bearer token missing after split')
    return res.status(401).json({ error: 'Invalid token' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (err) {
    // Log limited info for debugging (do not log full token in production)
    console.warn('Auth middleware: token verification failed -', err.message)
    return res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = authMiddleware
