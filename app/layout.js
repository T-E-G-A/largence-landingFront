export const metadata = {
  title: "LARGENCE - Legal Docs, Made Simple",
  description: "Generate tailored legal documents in minutes. Made for creatives and freelancers.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", margin: 0 }}>{children}</body>
    </html>
  )
}


import './globals.css'