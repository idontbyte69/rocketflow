const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'

export async function login(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) throw new Error('Login failed')
  return res.json()
}

export async function createPost(token, post) {
  const res = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(post)
  })
  if (!res.ok) throw new Error('Create post failed')
  return res.json()
}

const api = { login, createPost }
export default api
