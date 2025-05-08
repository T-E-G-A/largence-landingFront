import "./globals.css"
import { Toaster } from 'sonner';

export const metadata = {
  title: "LARGENCE - Legal Docs, Made Simple",
  description: "Generate tailored legal documents in minutes. Made for creatives and freelancers.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
