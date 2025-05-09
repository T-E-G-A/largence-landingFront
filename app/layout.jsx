import "./globals.css"
import { Toaster } from 'sonner';

export const metadata = {
  title: "LARGENCE - Legal Docs, Made Simple",
  description: "Generate tailored legal documents in minutes. Made for creatives and freelancers.",
  icons: {
    icon: '/images/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* The <head> tag is automatically managed by Next.js through the metadata object or can be customized using next/head if more control is needed. */}
      {/* For a simple favicon, adding it to the metadata object is the recommended approach. */}
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
