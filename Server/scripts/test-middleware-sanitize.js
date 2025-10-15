const sanitize = require('../src/middleware/sanitize')

const req = { body: { content: '<p>Hi<script>alert(1)</script></p>', contentHtml: '<div onclick="x()">X</div>' } }
const res = {}
sanitize(req, res, () => {
  console.log('After sanitize:', req.body)
})
