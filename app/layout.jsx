import "./globals.css"

export const metadata = {
  title: "LARGENCE - Legal Docs, Made Simple",
  description: "Generate tailored legal documents in minutes. Made for creatives and freelancers.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
