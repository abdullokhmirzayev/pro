import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type React from 'react'

import ClientLayout from './_client-layout'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

// <CHANGE> Enhanced SEO metadata with structured data and rich OpenGraph tags
export const metadata: Metadata = {
  metadataBase: new URL('https://abdulloh-dev.uz'),
  title: 'Abdulloh Mirzayev - Frontend Developer Portfolio',
  description:
    'Frontend Software Engineer specializing in Next.js, React, and modern web interfaces. Explore my portfolio, blog, and projects.',
  keywords: [
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'Web Developer',
    'JavaScript',
    'TypeScript',
    'Uzbekistan',
  ],
  authors: [{ name: 'Abdulloh Mirzayev' }],
  creator: 'Abdulloh Mirzayev',
  generator: 'Next.js',
  applicationName: 'Abdulloh Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdulloh-dev.uz',
    siteName: 'Abdulloh Portfolio',
    title: 'Abdulloh Mirzayev - Frontend Developer',
    description:
      'Frontend Software Engineer specializing in creating scalable user interfaces with Next.js and React.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulloh Mirzayev Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@abdulloh_io',
    title: 'Abdulloh Mirzayev - Frontend Developer',
    description:
      'Frontend Software Engineer specializing in Next.js, React, and modern web interfaces.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console kodini qo‘ying
  },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=5'
				/>
				<meta
					name='theme-color'
					content='#000000'
					media='(prefers-color-scheme: dark)'
				/>
				<meta
					name='theme-color'
					content='#ffffff'
					media='(prefers-color-scheme: light)'
				/>
			</head>
			<body className={`font-sans antialiased`}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	)
}
