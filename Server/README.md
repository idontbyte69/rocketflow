# RocketFlow Admin API (Express + Prisma)

This minimal admin API provides authentication (JWT), and CRUD endpoints for Posts and Tutorials. It's intentionally small so you can extend it or integrate it with a separate admin UI.

Prerequisites
- PostgreSQL running and accessible
- Node.js 18+

Setup
1. Copy `.env.example` to `.env` and set your `DATABASE_URL` and `JWT_SECRET`.
2. Install dependencies:

```bash
cd server
npm install
```

3. Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Create an admin user (run this in Node REPL or use the API):

```js
// quick example using prisma directly
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()
;(async () => {
  const hashed = await bcrypt.hash('yourpassword', 10)
  await prisma.user.create({ data: { email: 'admin@example.com', password: hashed, name: 'Admin' } })
  process.exit(0)
})()
```

5. Start the server:

```bash
npm run dev
```

API Endpoints
- POST /auth/login { email, password } -> { token }
- GET /posts
- GET /posts/:slug
- POST /posts (auth)
- PUT /posts/:slug (auth)
- DELETE /posts/:slug (auth)
- GET /tutorials
- GET /tutorials/:slug
- POST /tutorials (auth)
- PUT /tutorials/:slug (auth)
- DELETE /tutorials/:slug (auth)

Notes
- This is a scaffold; add validation, error handling, rate limiting and logging for production.
- You may prefer to create an admin web UI (React) inside `client/` that talks to this API.

Cloudinary uploads
- Add Cloudinary credentials to your server `.env`:

```
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

Restart the server after updating `.env`.

Sanitization
 - The server now sanitizes TipTap HTML before saving posts using `sanitize-html`.
 - Install dependencies with `npm install` in the `server` folder. If `sanitize-html` is not installed the server uses a conservative fallback sanitizer, but installing the package is recommended for robust filtering.
