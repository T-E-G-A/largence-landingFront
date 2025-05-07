import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* Gradient Circles */}
        <div className="absolute top-[-400px] left-[-300px] w-[1000px] h-[1000px] rounded-full bg-[#FFFAE2] opacity-95 blur-[100px]"></div>
        <div className="absolute top-[-200px] right-[-300px] w-[1000px] h-[1000px] rounded-full bg-[#CEFFF9] opacity-95 blur-[100px]"></div>

        <header className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-12 relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(45 20 20)" fill="#BFBFBF" />
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(90 20 20)" fill="#BFBFBF" />
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(135 20 20)" fill="#F40004" />
              </svg>
            </div>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#learn-more" className="text-sm font-medium hover:underline">
              Learn More
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        <section className="container relative z-10 mx-auto flex flex-col items-center px-4 py-20 text-center md:py-32">
          <p className="mb-2 text-lg font-medium">LARGENCE</p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Legal Docs, Made Simple
            <span className="mt-2 block">
              Powered by <span className="text-red-600">AI</span>
            </span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Generate tailored legal documents in minutes.
            <br />
            Made for creatives and freelancers.
          </p>
          <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
            <Link
              href="#waitlist"
              className="w-full rounded-full bg-red-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-opacity-90"
            >
              Join a waitlist
            </Link>
            <Link
              href="#learn-more"
              className="w-full rounded-full bg-white px-6 py-3 text-center font-medium text-black transition-colors hover:bg-opacity-90"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section id="learn-more" className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center mb-12">
              <div className="h-10 w-10 relative mr-2">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(45 20 20)" fill="#BFBFBF" />
                  <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(90 20 20)" fill="#BFBFBF" />
                  <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(135 20 20)" fill="#F40004" />
                </svg>
              </div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Creativity Deserves Better Paperwork</h2>
              <p className="text-lg">Largence will make creative work easier to protect.</p>
            </div>

            <div className="mb-12 overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lgcfig1-vmSKuwq0e91pQJmKBqtQnAKy7Gpx5q.png"
                alt="Colorful striped pattern"
                width={1000}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <p>
                Largence is a tool for generating clean and reliable legal documents, built specifically for creatives
                and freelancers.
              </p>

              <p>
                Largence exists to make the essential parts of creating, protecting work, setting terms and boundaries,
                and clarifying roles, easier to navigate without losing momentum.
              </p>

              <p>
                Templates are messy, full of vague clauses, and one-size-fits-all. Hiring a lawyer costs more than the
                gig itself. And trying to figure it out ourselves would get us lost, ruin our relationships, and make us
                miss out on opportunities.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-xl font-bold">Largence includes a small set of essential documents:</h3>

              <ul className="space-y-6">
                <li>
                  <strong>Non-Disclosure Agreement (NDA)</strong> - Protects your ideas when you're sharing them with
                  someone else. It sets the expectation that what's shared stays private.
                </li>

                <li>
                  <strong>Independent Contractor Agreement</strong> - Outlines the terms when someone is hired, but not
                  as an employee.
                </li>

                <li>
                  <strong>Consulting Agreement</strong> - For situations where someone is offering advice, strategy, or
                  expertise. It covers the scope, the fee, and any limitations.
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <p className="mb-8 text-center">
                You can{" "}
                <a href="#" className="text-red-600 underline">
                  reach out
                </a>{" "}
                to get more documents added to Largence.
              </p>

              <div className="mx-auto max-w-[450px] rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-center text-xl font-bold">Contact Us</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="contact-name" className="mb-2 block font-medium">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-3"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-email" className="mb-2 block font-medium">
                      Your email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-3"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="h-32 w-full rounded-md border border-gray-300 p-3"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-black py-3 font-medium text-white transition-colors hover:bg-opacity-80"
                  >
                    Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-[450px] rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold">Coming June</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full rounded-md border border-gray-300 p-3" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block font-medium">
                  Your email
                </label>
                <input id="email" type="email" className="w-full rounded-md border border-gray-300 p-3" required />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-red-600 py-3 font-medium text-white transition-colors hover:bg-opacity-90"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </section>

        <footer className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-8">
          <div className="mb-2 flex items-center">
            <div className="h-12 w-12 relative mr-3">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(45 20 20)" fill="#BFBFBF" />
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(90 20 20)" fill="#BFBFBF" />
                <ellipse cx="20" cy="20" rx="10" ry="2" transform="rotate(135 20 20)" fill="#F40004" />
              </svg>
            </div>
            <p className="text-3xl font-medium">LARGENCE</p>
          </div>
          <p className="text-base">Cambridge, 2025</p>
        </footer>
      </div>
    </main>
  )
}
