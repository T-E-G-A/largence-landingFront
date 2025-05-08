"use client";

import { useState } from "react";
import { TermsDialog } from "@/components/ui/terms-dialog";
import { toast } from "sonner"; 

export function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);

    if (!termsAccepted) {
      setFormError("You must accept the terms and conditions to join.");
      toast.error("Please accept the terms and conditions.");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // On success:
      toast.success("You've successfully joined the waitlist!");
      setName("");
      setEmail("");
      setTermsAccepted(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setFormError("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const openTermsModal = (e) => {
    e.preventDefault(); 
    setIsTermsModalOpen(true);
  };

  return (
    <>
      <section id="waitlist" className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[450px] rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Coming June</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name-waitlist" className="mb-2 block font-medium">
                Name
              </label>
              <input
                id="name-waitlist"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email-waitlist" className="mb-2 block font-medium">
                Your email
              </label>
              <input
                id="email-waitlist"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-6 flex items-center space-x-2">
              <input
                id="terms-checkbox-waitlist"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                disabled={isLoading}
              />
              <label htmlFor="terms-checkbox-waitlist" className="text-sm text-gray-700">
                I agree to the{" "}
                <span
                  onClick={openTermsModal}
                  className="text-red-600 underline cursor-pointer hover:text-red-700"
                  tabIndex={0} 
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openTermsModal(e);}}
                >
                  terms and conditions
                </span>
              </label>
            </div>

            {formError && (
              <p className="mb-4 text-sm text-red-600">{formError}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-red-600 py-3 font-medium text-white transition-colors hover:bg-opacity-90 disabled:opacity-50"
              disabled={isLoading || !name || !email || !termsAccepted}
            >
              {isLoading ? "Joining..." : "Join waitlist"}
            </button>
          </form>
        </div>
      </section>

      <TermsDialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
        <h3 className="text-lg font-semibold mb-2">Our Terms of Service</h3>
        <p className="mb-2">Welcome to Largence! By signing up for our waitlist, you agree to these terms.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Collection and Use:</h4>
        <p className="mb-2">We collect your name and email address to notify you about Largence's launch, updates, and related news. We aim to hold your data only for as long as necessary for these purposes, generally until the product launch phase is complete or you request removal.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Data Protection:</h4>
        <p className="mb-2">We are committed to protecting your data in accordance with general GDPR and DPA principles. We will not share your personal information with third parties without your consent, except as required by law.</p>
        <h4 className="text-md font-semibold mt-4 mb-1">Your Rights:</h4>
        <p className="mb-2">You have the right to access, correct, or delete your personal information. You can unsubscribe from our communications at any time.</p>
        <p className="mt-4">These terms are a brief overview. A more detailed policy will be available at launch.</p>
      </TermsDialog>
    </>
  );
} 