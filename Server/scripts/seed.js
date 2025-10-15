const prisma = require('../src/db')
const bcrypt = require('bcryptjs')

async function main() {
  // create admin user if not exists
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@rocketflow.test'
  const password = process.env.SEED_ADMIN_PASSWORD || 'password123'
  let user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    const hashed = await bcrypt.hash(password, 10)
    user = await prisma.user.create({ data: { email, password: hashed, name: 'Admin', role: 'admin' } })
    console.log('Created admin user:', email)
  } else {
    console.log('Admin user already exists:', email)
  }

  // create a sample post if none exist
  const count = await prisma.post.count()
  if (count === 0) {
    const post = await prisma.post.create({
      data: {
        slug: 'welcome-to-rocketflow',
        title: 'Welcome to RocketFlow',
        excerpt: 'A short introduction to RocketFlow',
        content: '<p>Welcome! This is a seeded post. Add content via the admin dashboard.</p>',
        featuredImage: '',
        author: 'Admin',
        tags: ['welcome', 'intro'],
      }
    })
    console.log('Created sample post', post.slug)
  } else {
    console.log('Posts already exist, skipping sample post creation')
  }
}

main().then(() => {
  console.log('Seeding complete')
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
