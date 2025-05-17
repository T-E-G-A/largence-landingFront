import "./globals.css"
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "LARGENCE - Custom Legal Docs In Minutes",
  description: "Generate tailored legal documents in minutes. Made for creatives and freelancers.",
  icons: {
    icon: '/images/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-text-pro" />
      </head>
      {/* The <head> tag is automatically managed by Next.js through the metadata object or can be customized using next/head if more control is needed. */}
      {/* For a simple favicon, adding it to the metadata object is the recommended approach. */}
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
