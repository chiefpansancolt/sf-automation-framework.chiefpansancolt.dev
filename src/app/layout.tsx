import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

// siteUrl must match SITE_URL in src/app/robots.ts and src/app/sitemap.ts.
// A mismatch between these was a real bug found across several sites cloned
// from this template's sibling repos.
const siteUrl = 'https://sf-automation-framework.chiefpansancolt.dev'
const siteDescription =
  'A trigger framework, error logger, and flow template kit for Salesforce, deployed straight from source with the sf CLI.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Docs',
    default: 'Salesforce Automation Framework',
  },
  description: siteDescription,
  keywords: [
    'Salesforce Automation Framework',
    'Salesforce trigger framework',
    'Apex trigger framework',
    'Salesforce error logger',
    'sf CLI',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Salesforce Automation Framework',
    title: 'Salesforce Automation Framework',
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Automation Framework',
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'Salesforce Automation Framework',
  description: siteDescription,
  codeRepository:
    'https://github.com/chiefpansancolt/salesforce-automation-framework',
  programmingLanguage: 'Apex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
