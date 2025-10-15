import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mbewu: Seeds of Dignified Work',
  description: 'Stories of African youth, purpose, and creativity - A digital storytelling experience',
  keywords: ['African youth', 'dignified work', 'CAPSI', 'digital storytelling', 'social impact'],
  authors: [{ name: 'CAPSI' }],
  openGraph: {
    title: 'Mbewu: Seeds of Dignified Work',
    description: 'Stories of African youth, purpose, and creativity',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Grain texture overlay */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}