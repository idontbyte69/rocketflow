'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import POSTS from '../blog/posts'

const MOCK_POSTS = POSTS

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card hover={true} tiltEffect={true} padding="md" className="group">
        <article aria-labelledby={`post-${post.id}-title`} className="flex flex-col h-full">
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-50">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="mt-4 flex-1 flex flex-col">
          <h3 id={`post-${post.id}-title`} className="text-lg font-bold text-gray-900 group-hover:text-coral-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <div>
              <span className="font-medium text-gray-700">{post.author}</span>
              <span className="ml-2">•</span>
              <time className="ml-2" dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">❤ {post.likes}</span>
              <span className="text-gray-400 text-sm">👁 {post.views}</span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </article>
      </Card>
    </Link>
  )
}

export default function BlogClient() {
  const [query, setQuery] = useState('')
  const [service, setService] = useState('all')
  const [selectedTags, setSelectedTags] = useState([])

  // derive tag and service options from posts
  const services = useMemo(() => {
    const s = new Set(MOCK_POSTS.map((p) => p.service))
    return ['all', ...Array.from(s)]
  }, [])

  const tags = useMemo(() => {
    const t = new Set()
    MOCK_POSTS.forEach((p) => p.tags.forEach((tag) => t.add(tag)))
    return Array.from(t)
  }, [])

  // filtering logic
  const filtered = useMemo(() => {
    return MOCK_POSTS.filter((p) => {
      // search
      const q = query.trim().toLowerCase()
      if (q) {
        const inText = (p.title + ' ' + p.excerpt + ' ' + p.tags.join(' ')).toLowerCase().includes(q)
        if (!inText) return false
      }

      // service
      if (service !== 'all' && p.service !== service) return false

      // tags
      if (selectedTags.length > 0 && !selectedTags.every((t) => p.tags.includes(t))) return false

      // (date filtering removed)

      return true
    })
  }, [query, service, selectedTags])

  const latest = useMemo(() => {
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [filtered])

  const popular = useMemo(() => {
    return [...MOCK_POSTS].sort((a, b) => (b.views + b.likes) - (a.views + a.likes)).slice(0, 3)
  }, [])

  // toggle tag selection
  function toggleTag(t) {
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  return (
    <main>
      <Section className="pt-20 pb-8">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">RocketFlow Blog</h1>
            <p className="mt-2 text-gray-600">Insights, case studies and product updates about marketing automation.</p>

            <div className="mt-6 flex flex-col md:flex-row items-stretch gap-3">
              <label className="sr-only" htmlFor="search">Search posts</label>
              <input
                id="search"
                className="flex-1 rounded-lg border border-gray-200 p-3 shadow-sm"
                placeholder="Search by title, excerpt or tag..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search posts"
              />

              <select className="rounded-lg border border-gray-200 p-3 bg-white" value={service} onChange={(e) => setService(e.target.value)} aria-label="Filter by service">
                {services.map((s) => (
                  <option key={s} value={s}>{s === 'all' ? 'All Services' : s}</option>
                ))}
              </select>

              {/* date filters removed */}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`text-xs px-3 py-1 rounded-full border ${selectedTags.includes(t) ? 'bg-coral-500 text-white border-coral-500' : 'bg-white text-gray-700 border-gray-200'}`} 
                  aria-pressed={selectedTags.includes(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
                <p className="text-sm text-gray-500">Showing {latest.length} post{latest.length !== 1 ? 's' : ''}</p>
              </div>

              {latest.length === 0 ? (
                <div className="rounded-xl border border-gray-200 p-8 text-center text-gray-600">No posts match your filters. Try adjusting search or filters.</div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {latest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Popular Posts</h3>
                <div className="mt-4 space-y-4">
                  {popular.map((p) => (
                    <div key={p.id} className="flex items-center gap-3">
                      <div className="w-16 h-10 relative rounded-md overflow-hidden bg-gray-50">
                        <Image src={p.featuredImage} alt={p.title} fill className="object-cover" loading="lazy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{p.title}</p>
                        <p className="text-xs text-gray-500">{formatDate(p.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters Summary</h3>
                <div className="mt-3 text-sm text-gray-600 space-y-2">
                  <div>Service: <span className="font-medium text-gray-800">{service === 'all' ? 'All' : service}</span></div>
                  <div>Tags: <span className="font-medium text-gray-800">{selectedTags.length > 0 ? selectedTags.join(', ') : 'Any'}</span></div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Subscribe</h3>
                <p className="text-sm text-gray-600 mt-2">Get the latest posts to your inbox.</p>
                <div className="mt-3 flex gap-2">
                  <input className="flex-1 rounded-lg border border-gray-200 p-2" placeholder="you@company.com" aria-label="Email for blog subscription" />
                  <button className="bg-coral-500 text-white px-4 rounded-lg">Subscribe</button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
        {/* no inline details - posts link to /blog/[slug] */}
    </main>
  )
}
