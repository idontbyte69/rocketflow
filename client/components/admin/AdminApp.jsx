'use client'

import { useState } from 'react'
import { login, createPost } from './api'

export default function AdminApp() {
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('password')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState('')

  const [post, setPost] = useState({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })

  async function doLogin(e) {
    e.preventDefault()
    try {
      const data = await login(email, password)
      setToken(data.token)
      setStatus('Logged in')
    } catch (err) {
      setStatus('Login failed')
    }
  }

  async function doCreate(e) {
    e.preventDefault()
    try {
      await createPost(token, post)
      setStatus('Post created')
    } catch (err) {
      setStatus('Create failed')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <section className="mb-8">
        <h3 className="font-semibold">Login</h3>
        <form onSubmit={doLogin} className="flex gap-2 mt-3">
          <input className="border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-coral-500 text-white px-4 py-2 rounded">Login</button>
        </form>
      </section>

      <section>
        <h3 className="font-semibold">Create Post</h3>
        <form onSubmit={doCreate} className="mt-3 space-y-3">
          <input placeholder="Title" className="w-full border p-2 rounded" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
          <input placeholder="Slug" className="w-full border p-2 rounded" value={post.slug} onChange={(e) => setPost({ ...post, slug: e.target.value })} />
          <input placeholder="Excerpt" className="w-full border p-2 rounded" value={post.excerpt} onChange={(e) => setPost({ ...post, excerpt: e.target.value })} />
          <textarea placeholder="Content" className="w-full border p-2 rounded" rows={6} value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} />
          <input placeholder="Featured Image" className="w-full border p-2 rounded" value={post.featuredImage} onChange={(e) => setPost({ ...post, featuredImage: e.target.value })} />
          <div className="flex gap-2">
            <button className="bg-coral-500 text-white px-4 py-2 rounded">Create</button>
            <div className="text-sm self-center text-gray-600">{status}</div>
          </div>
        </form>
      </section>
    </div>
  )
}
