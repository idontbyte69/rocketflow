import POSTS from '../../../components/blog/posts'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | RocketFlow`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    }
  }
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-24 px-4">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-2 text-gray-600">We couldn't find the post you're looking for.</p>
      </main>
      <Footer />
    </>
  )

  // helpers for the layout
  function readingTime(text) {
    const words = text ? text.split(/\s+/).length : 0
    const minutes = Math.max(1, Math.round(words / 200))
    return `${minutes} min read`
  }

  function extractInsights(text) {
    if (!text) return []
    const parts = text.split('.').map((s) => s.trim()).filter(Boolean)
    // return up to 3 concise sentences as insights
    return parts.slice(0, 3)
  }

  const insights = extractInsights(post.content)

  // related posts: share at least one tag, fallback to same service
  const related = POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length + (p.service === post.service ? 0.2 : 0),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  return (
    <>
      <Navbar />

      {/* Hero: title-over-background (no featured image used as background) */}
      <header className="relative">
        <div className="h-72 md:h-96 w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center">
          <Container>
            <div className="max-w-4xl mx-auto text-center text-white py-16 md:py-20">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">{post.title}</h1>
              <p className="mt-3 text-sm md:text-base opacity-90">{post.excerpt}</p>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs md:text-sm text-white/90">
                <div className="font-medium">{post.author}</div>
                <div>•</div>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <div>•</div>
                <div>{readingTime(post.content)}</div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <Section padding="lg" className="-mt-24">
        <Container>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <main className="lg:col-span-2 p-8 lg:p-12">
                <Link href="/blog" className="text-sm text-coral-500 hover:underline mb-2 inline-block">← Back to Blog</Link>

                {/* Lead insight with featured image on top */}
                <div className="mt-2">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                      <Image src={post.featuredImage} alt={post.title} width={1200} height={700} className="object-cover w-full h-56 md:h-72" />
                    </div>

                    <div className="w-full">
                      <div className="text-lg md:text-xl font-semibold text-gray-900">Quick Insight</div>
                      <p className="mt-2 text-gray-700 text-base leading-relaxed">{insights[0] || post.excerpt}</p>
                      {insights.length > 1 && (
                        <ul className="mt-3 list-disc list-inside text-gray-600">
                          {insights.slice(1).map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <article className="prose lg:prose-lg mt-6 text-gray-800">
                  <p>{post.content}</p>
                </article>

                {/* Tags & Share */}
                <div className="mt-8 flex items-center justify-between flex-col sm:flex-row gap-4">
                  <div className="flex items-center flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-coral-500">Share on Twitter</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-coral-500">Share on LinkedIn</a>
                  </div>
                </div>
              </main>

              {/* Sidebar: Related posts & CTA */}
              <aside className="p-6 border-l border-gray-100 bg-gray-50">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Related posts</h3>
                  <div className="mt-4 space-y-4">
                    {related.length === 0 && (
                      <div className="text-sm text-gray-600">No related posts found. Explore the blog for more insights.</div>
                    )}
                    {related.map(({ post: r }) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="block">
                        <div className="flex items-start gap-3">
                          <div className="w-20 h-12 relative rounded overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image src={r.featuredImage} alt={r.title} fill className="object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{r.title}</div>
                            <div className="text-xs text-gray-500">{readingTime(r.content)}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900">Ready to try RocketFlow?</h4>
                  <p className="text-sm text-gray-600 mt-2">Create an account and launch automated campaigns in minutes.</p>
                  <div className="mt-3">
                    <a href="https://rocketflow.biz/create_account/selected_package" className="inline-block bg-coral-500 text-white px-4 py-2 rounded-md text-sm">Get Started</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  )
}
