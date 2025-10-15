try {
  const sanitizeHtml = require('sanitize-html')
  console.log('sanitize-html loaded:', typeof sanitizeHtml === 'function' || typeof sanitizeHtml === 'object')
} catch (e) {
  console.error('sanitize-html require failed:', e.message)
}

try {
  const controller = require('../src/controllers/postsController')
  console.log('safeSanitize available:', typeof controller.safeSanitize === 'function')
  const res = controller.safeSanitize('<p>Hello <script>alert(1)</script><a href="http://example.com" onclick="x()">link</a></p>')
  console.log('sanitized:', res)
} catch (e) {
  console.error('controller test failed:', e.message)
}
