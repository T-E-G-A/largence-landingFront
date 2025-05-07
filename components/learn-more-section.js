import Image from "next/image"
import { ContactForm } from "./contact-form"

export function LearnMoreSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-12">
        <Image
          src="/images/logo.png"
          alt="LARGENCE Logo"
          width={30}
          height={30}
          className="h-8 w-auto mr-2 animate-float"
        />
      </div>

      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Creativity Deserves Better Paperwork</h2>
        <p className="text-lg">Largence will make creative work easier to protect.</p>
      </div>

      <div className="rounded-2xl overflow-hidden mb-12 animate-scale-in">
        <Image
          src="/images/lgcfig1.png"
          alt="Colorful abstract pattern"
          width={1000}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="space-y-8 animate-fade-in animate-delay-200">
        <p>
          Largence is a tool for generating clean and reliable legal documents, built specifically for creatives and
          freelancers.
        </p>

        <p>
          Largence exists to make the essential parts of creating, protecting work, setting terms and boundaries, and
          clarifying roles, easier to navigate without losing momentum.
        </p>

        <p>
          Templates are messy, full of vague clauses, and one-size-fits-all. Hiring a lawyer costs more than the gig
          itself. And trying to figure it out ourselves would get us lost, ruin our relationships, and make us miss out
          on opportunities.
        </p>

        <p>
          Largence is built to be more reliable than something on the internet, and way more affordable than legal
          counsel. Largence is built to be usable by anyone, without legalese.
        </p>

        <p>
          Largence is here to help people start projects, send over drafts, team up with friends, license tracks, and
          stand up for their work when someone crosses the line. There's a difference between having a document and
          understanding what it says. Largence makes sure you get both.
        </p>
      </div>

      <div className="mt-12 animate-fade-in animate-delay-300">
        <h3 className="text-xl font-bold mb-4">Largence includes a small set of essential documents:</h3>

        <ul className="space-y-6">
          <li>
            <strong>Non-Disclosure Agreement (NDA)</strong> - Protects your ideas when you're sharing them with someone
            else. It sets the expectation that what's shared stays private.
          </li>

          <li>
            <strong>Independent Contractor Agreement</strong> - Outlines the terms when someone is hired, but not as an
            employee.
          </li>

          <li>
            <strong>Consulting Agreement</strong> - For situations where someone is offering advice, strategy, or
            expertise. It covers the scope, the fee, and any limitations.
          </li>

          <li>
            <strong>Collaboration Agreement</strong> - When people are working on something together, this helps
            everyone get on the same page.
          </li>

          <li>
            <strong>Licensing Agreement</strong> - For when you give someone permission to use your work under specific
            terms.
          </li>

          <li>
            <strong>Producer Agreement</strong> - Lays out the relationship and terms between a producer and an artist.
          </li>

          <li>
            <strong>Cease and Desist Letter</strong> - A clear and direct way to ask someone to stop using your work or
            crossing a line before taking legal action.
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <p className="mb-8 text-center animate-fade-in animate-delay-400">
          You can{" "}
          <a href="#" className="text-primary underline">
            reach out
          </a>{" "}
          to get more documents added to Largence.
        </p>

        <div className="form-container bg-white p-8 rounded-lg shadow-lg animate-scale-in">
          <h3 className="text-xl font-bold mb-6 text-center">Contact Us</h3>
          <ContactForm />
        </div>
      </div>

      <div className="mt-12 text-center animate-fade-in animate-delay-400">
        <p className="mb-4">
          This isn't about paperwork for the sake of paperwork. It's about protecting what's yours, respecting who
          you're working with, and clearing the path so the work can happen, because creativity deserves better
          paperwork.
        </p>

        <a
          href="#waitlist"
          className="inline-block py-3 px-8 bg-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-colors"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  )
}
