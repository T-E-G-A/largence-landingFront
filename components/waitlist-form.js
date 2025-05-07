"use client"

import { useState } from "react"

export function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send this data to your API
    console.log({ name, email })

    setIsSubmitting(false)
    setIsSubmitted(true)
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Your email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors ${
          isSubmitting ? "opacity-70" : ""
        }`}
      >
        {isSubmitting ? "Processing..." : isSubmitted ? "Thank you!" : "Join waitlist"}
      </button>

      {isSubmitted && (
        <p className="text-green-600 text-sm text-center">Thanks for joining! We'll notify you when we launch.</p>
      )}
    </form>
  )
}
