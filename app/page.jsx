import Link from "next/link"
import Image from "next/image"
import { WaitlistSection } from "@/components/waitlist-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* Gradient Circles */}
        <div className="absolute top-[-250px] md:top-[-500px] left-[-250px] md:left-[-500px] w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] rounded-full bg-[#FFF8E1] opacity-80 blur-[100px] md:blur-[150px] transition-all duration-300"></div>
        <div className="absolute top-[-200px] md:top-[-400px] right-[-250px] md:right-[-500px] w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] rounded-full bg-[#CEFFF9] opacity-60 blur-[100px] md:blur-[150px] transition-all duration-300"></div>

        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="relative flex w-full items-center justify-between p-4 max-w-7xl mx-auto">
            <Link href="/" className="flex items-center group">
              <div className="relative h-12 w-12 transform transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Largence Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="#features" className="text-sm font-medium hover:text-gray-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
                Features
              </Link>
              <Link href="#learn-more" className="text-sm font-medium hover:text-gray-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
                Learn More
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </header>

        <section className="container relative z-10 mx-auto flex flex-col items-center px-4 py-24 text-center md:py-40">
          <p className="mb-2 text-lg font-medium tracking-wide opacity-90">LARGENCE</p>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl animate-fade-in">
            Custom Legal Docs
            <span className="mt-2 block">
              In <span className="text-red-600 relative inline-block">Minutes</span>
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed">
            Generate tailored legal documents in minutes.
            <br className="hidden md:block" />
            Made for creatives and freelancers.
          </p>
          <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
            <Link
              href="#waitlist"
              className="group w-full rounded-full bg-red-600 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:bg-opacity-90 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Join waitlist
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#learn-more"
              className="group w-full rounded-full bg-white px-6 py-3 text-center font-medium text-black transition-all duration-200 hover:bg-gray-50 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            >
              Learn more
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

        <section id="learn-more" className="container relative z-10 mx-auto px-4 py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-neue-haas)" }}>
                Creativity Deserves
                <br />
                Better Paperwork
              </h2>
              <p className="text-lg text-gray-900" style={{ fontFamily: "var(--font-neue-haas)" }}>
                Largence will make creative work
                <br />
                easier to protect.
              </p>
            </div>

            <div className="mb-12 overflow-hidden rounded-[2rem] transform transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lgcfig1-vmSKuwq0e91pQJmKBqtQnAKy7Gpx5q.png"
                alt="Colorful striped pattern"
                width={1000}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
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

            <div className="mt-16">
              <h3 id="features" className="mb-6 text-2xl font-bold scroll-mt-20">Essential Documents Included:</h3>

              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Non-Disclosure Agreement (NDA)</strong> - Protects your ideas when you're sharing them with
                    someone else. It sets the expectation that what's shared stays private.
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Independent Contractor Agreement</strong> - Outlines the terms when someone is hired, but not
                    as an employee.
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Consulting Agreement</strong> - For situations where someone is offering advice, strategy, or
                    expertise. It covers the scope, the fee, and any limitations.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Collaboration Agreement</strong> - When people are working on something together, this helps everyone get on the same page.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Licensing Agreement</strong> - For when you give someone permission to use your IP under specific terms.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Producer Agreement</strong> - Lays out the relationship and terms between a producer and an artist.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-600">•</span>
                  <div>
                    <strong className="text-black">Cease and Desist Letter</strong> - A clear and direct way to ask someone to stop using your work or crossing a line before taking legal action.
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8 mt-16 text-gray-700 leading-relaxed">
              <p>
                Examples like generic lawyer docs are expensive. Largence is neither; it's specific enough to be trusted and flexible enough to be useful.
              </p>
              <p>
                This isn't about paperwork for the sake of paperwork. It's about protecting what you're responsible for when working with and protecting others. So the work can happen, because creativity deserves better paperwork.
              </p>
            </div>

            <div className="mt-16">
              <p className="mb-8 text-center text-gray-700">
                You can{" "}
                <Link 
                  href="mailto:hello@largence.com" 
                  className="text-red-600 underline hover:text-red-700 transition-colors"
                >
                  reach out
                </Link>{" "}
                to get more documents added to Largence.
              </p>

              <div id="contact" className="scroll-mt-20">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>

        <WaitlistSection />

        <footer className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-32">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[6.5rem] w-[6.5rem] relative -mt-1 -mr-6">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <ellipse cx="20" cy="20" rx="12" ry="2" transform="rotate(45 20 20)" fill="#BFBFBF" />
                  <ellipse cx="20" cy="20" rx="12" ry="2" transform="rotate(90 20 20)" fill="#BFBFBF" />
                  <ellipse cx="20" cy="20" rx="12" ry="2" transform="rotate(135 20 20)" fill="#F40004" />
                </svg>
              </div>
              <p className="text-[3rem] font-medium tracking-normal" style={{ fontFamily: "var(--font-neue-haas)" }}>LARGENCE</p>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-lg text-gray-600 tracking-wide" style={{ fontFamily: "var(--font-neue-haas)" }}>Cambridge, {currentYear}</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
