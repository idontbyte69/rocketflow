const controller = require('../src/controllers/postsController')

const input = `
  <h1>Title</h1>
  <p>Paragraph <script>alert(1)</script></p>
  <table><tr><td>cell</td></tr></table>
  <iframe src="https://example.com/embed" width="560" height="315"></iframe>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315"></iframe>
`

console.log('Input:\n', input)
const out = controller.safeSanitize(input)
console.log('\nSanitized output:\n', out)
