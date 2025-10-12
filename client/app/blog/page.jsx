import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import BlogClient from '../../components/blog/BlogClient'

export const metadata = {
  title: 'Blog | RocketFlow',
  description:
    'RocketFlow blog — insights, case studies and product updates about marketing automation for gadget shops and other industries in Bangladesh.',
  openGraph: {
    title: 'Blog | RocketFlow',
    description:
      'RocketFlow blog — insights, case studies and product updates about marketing automation for gadget shops and other industries in Bangladesh.',
    url: 'https://rocketflow.com/blog',
    type: 'website',
    images: [
      {
        url: '/logo-red-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'RocketFlow Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | RocketFlow',
    description:
      'RocketFlow blog — insights, case studies and product updates about marketing automation for gadget shops and other industries in Bangladesh.',
    images: ['/logo-red-bg.jpg'],
  },
}

export default function BlogPage() {
  // Server component: renders client-side BlogClient for interactivity
  return (
    <main>
        <Navbar />
      <BlogClient />
      <Footer />
    </main>
  )
}
