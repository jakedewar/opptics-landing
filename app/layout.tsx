import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { GeistSans, GeistMono } from 'geist/font'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://opptics.io"),
  title: {
    default: 'Opptics - Smart Demo Personalization',
    template: `%s | Opptics`
  },
  description: 'Instantly personalize your product demos with smart terminology mapping. No code changes required.',
  keywords: [
    'demo personalization',
    'sales demos',
    'product demos',
    'terminology mapping',
    'sales enablement',
    'demo automation',
    'chrome extension'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opptics.io',
    siteName: 'Opptics',
    title: 'Opptics - Smart Demo Personalization',
    description: 'Instantly personalize your product demos with smart terminology mapping. No code changes required.',
    images: [
      {
        url: '/assets/opptics-social.png',
        width: 1200,
        height: 630,
        alt: 'Opptics Demo Personalization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opptics - Smart Demo Personalization',
    description: 'Instantly personalize your product demos with smart terminology mapping. No code changes required.',
    site: '@opptics',
    creator: '@opptics',
    images: ['/assets/opptics-social.png']
  },
  icons: {
    icon: [
      {
        url: '/assets/logo.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: [
      {
        url: '/assets/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

const fontConfig = {
  sans: GeistSans.className,
  mono: GeistMono.className,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="preload"
            href="/assets/logo.svg"
            as="image"
            type="image/svg+xml"
          />
          <link 
            rel="manifest" 
            href="/manifest.json" 
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  )
}