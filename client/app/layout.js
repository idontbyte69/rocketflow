import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://rocketflow.com'),
  title: {
    default: "RocketFlow | All-in-One Marketing Automation Platform",
    template: "%s | RocketFlow"
  },
  description: "Transform your business with RocketFlow's powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.",
  keywords: [
    "marketing automation", "business growth", "customer engagement", 
    "digital marketing", "Bangladesh", "SMS marketing", "email marketing", 
    "social media automation", "CRM", "lead generation", "sales automation",
    "restaurant marketing", "retail automation", "hotel marketing", 
    "ecommerce automation", "gadget shop automation"
  ],
  authors: [{ name: "RocketFlow Team" }],
  creator: "RocketFlow",
  publisher: "RocketFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rocketflow.com',
    siteName: 'RocketFlow',
    title: 'RocketFlow | All-in-One Marketing Automation Platform',
    description: 'Transform your business with RocketFlow\'s powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.',
    images: [
      {
        url: '/logo-red-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'RocketFlow Marketing Automation Platform',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RocketFlow | All-in-One Marketing Automation Platform',
    description: 'Transform your business with RocketFlow\'s powerful marketing automation platform. Boost revenue, engage customers, and streamline operations across all industries in Bangladesh.',
    images: ['/logo-red-bg.jpg'],
    creator: '@rocketflow',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://rocketflow.com',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#F87171" />
        <meta name="msapplication-TileColor" content="#F87171" />
        
        {/* Performance and security */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RocketFlow",
              "url": "https://rocketflow.com",
              "logo": "https://rocketflow.com/logo.png",
              "description": "All-in-One Marketing Automation Platform for businesses in Bangladesh",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD",
                "addressRegion": "Dhaka"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Bengali"]
              },
              "sameAs": [
                "https://facebook.com/rocketflow",
                "https://twitter.com/rocketflow",
                "https://linkedin.com/company/rocketflow"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
